# Getting admin uploads onto the website

Status as of 1 Aug 2026.

## What was wrong

Nothing in the code was missing. Every piece of infrastructure was switched off:

| Thing | State |
|---|---|
| `techland-backend.onrender.com` | No response (90s timeout) |
| `apis.techlanditsolutions.com` | DNS → 147.93.27.247, all ports closed |
| `147.93.27.247:5000` (Hostinger VPS) | Ports 80 / 443 / 5000 all closed |
| Railway MongoDB | TCP connects, Mongo handshake closes — instance gone |
| `admin.techlanditsolutions.com` | DNS does not resolve |
| Cloudinary (`dmtycnij4`) | **Alive and working** — verified by a real upload |

Because the API was dead, `OurClients` and `HomeTestimonials` had been rewritten to
read from local static files instead of the API. That fixed the blank sections but
permanently disconnected the admin panel from those parts of the site.

## What the code does now

Both sections use `frontend/src/utils/useApiWithFallback.js`:

1. Render immediately from the bundled static data — the section is never blank.
2. Call the API in the background.
3. If the API answers with rows, swap them in.
4. If the API is unreachable, errors, or returns nothing, keep the static data.

So admin uploads appear the moment a backend is live, and the site does not break
when it isn't.

`Portfolio`, `WebsitesProjects`, `MobileAppProjects` and `OurTeam` already merged
API data with static data, so they were left as they were.

## Also fixed

- **`/api/auth/*` was never mounted** in `src/routes.js`. Login returned 404, which
  is why `Login.jsx` had a hardcoded `admin@techland.com` / `admin123` bypass. Auth
  is now mounted and that bypass is gone.
- **Every write route was public.** Anyone could POST/PUT/DELETE clients, projects,
  team members and read contact submissions. All write routes now require
  `adminAuth`. GETs for clients/team/projects/activities/testimonials stay public
  (the website needs them); contact GET/DELETE is now admin-only.
- **`ADMIN_PASSWORD` was never set**, so login could not have succeeded even if the
  route had been mounted.
- **`ADMIN_EMAIL` was doing two jobs** — login username and contact-form recipient.
  Login now uses `ADMIN_LOGIN_EMAIL`, falling back to `ADMIN_EMAIL`.
- **The session cookie was `SameSite=strict; secure=false`**, which a browser will
  not send from `admin.techlanditsolutions.com` to `apis.techlanditsolutions.com`.
  It is now `SameSite=None; Secure` in production, `Lax` in development.

## Run it locally right now

You already have MongoDB running on this machine, so the whole stack works
offline. `backend/Techland_backend/.env` is pointed at
`mongodb://127.0.0.1:27017/techland`, and the database has already been seeded.

```
cd backend/Techland_backend && npm run dev     # API on :5000
cd frontend                 && npm run dev     # website on :3000
cd Admin                    && npm run dev     # admin panel on :5173
```

Log into the admin panel with the values in `.env`
(`ADMIN_LOGIN_EMAIL` / `ADMIN_PASSWORD`), add a client with a logo, then reload
the website — the logo appears in *Our Clients*.

### What is already in the local database

| Collection | Records | Images |
|---|---|---|
| clients | 18 | all on Cloudinary |
| testimonials | 8 | all on Cloudinary |
| team | 4 | all on Cloudinary |
| projects | 3 | all on Cloudinary |
| activities | 1 | all on Cloudinary |

All 34 image URLs were checked and return HTTP 200.

### The two scripts

```
node scripts/seed.js                            # load the static clients/testimonials into the DB
node scripts/seed.js --dry-run                  # preview, uploads nothing
node scripts/seed.js --undo                     # remove what seed.js created

node scripts/migrate-uploads-to-cloudinary.js   # move legacy /uploads/* images to Cloudinary
node scripts/migrate-uploads-to-cloudinary.js --dry-run
```

Both are idempotent — re-running skips anything already done.

`migrate-uploads-to-cloudinary.js` is the important one for deployment. Twelve
records still pointed at local disk paths like `/uploads/team/1770016073931.jpeg`,
which would have shown as broken images on any fresh host. They are now permanent
Cloudinary URLs. Run this again against Atlas if you ever restore an old dump.

## Setup

### 1. MongoDB Atlas

1. Create a free M0 cluster at <https://cloud.mongodb.com>.
2. **Database Access** → add a user, note the password.
3. **Network Access** → add `0.0.0.0/0` (Render and similar have no fixed
   outbound IP; a VPS can be restricted to its own IP).
4. **Connect → Drivers** → copy the `mongodb+srv://...` string, and insert
   `/techland` before the `?`:

```
mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/techland?retryWrites=true&w=majority
```

URL-encode any `@ : / ? #` in the password (`@` → `%40`).

### 2. Deploy the backend

Root directory `backend/Techland_backend`, build `npm install`, start `npm start`.

Environment variables to set on the host — see `backend/Techland_backend/.env.production`
for the annotated list:

| Variable | Notes |
|---|---|
| `MONGO_URI` | The Atlas string from step 1 |
| `NODE_ENV` | `production` — this is what switches the cookie to `SameSite=None; Secure` |
| `ADMIN_LOGIN_EMAIL` | Your admin login |
| `ADMIN_PASSWORD` | Set a strong one |
| `JWT_SECRET` | `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"` |
| `CLOUDINARY_CLOUD_NAME` | `dmtycnij4` |
| `CLOUDINARY_API_KEY` | `449833551258349` |
| `CLOUDINARY_API_SECRET` | From your Cloudinary dashboard |
| `EMAIL_USER` / `EMAIL_PASS` | Gmail address + App Password, for the contact form |
| `ADMIN_EMAIL` | Inbox that receives contact submissions |

Do not put placeholder text in the `CLOUDINARY_*` variables. `multer.js` only checks
whether they are non-empty, so fake values make it believe Cloudinary is configured
and every upload then fails. Either real credentials, or all three blank.

The API must be served over **HTTPS**. Admin login relies on a `Secure` cookie,
which browsers reject over plain HTTP.

Check it: `https://YOUR_API/health` should report `database.status: "connected"`.

### 3. Point the frontends at it

Edit **both** files:

- `frontend/.env.production`
- `Admin/.env.production`

```
VITE_API_URL=https://your-api-host
```

Vite bakes this in at **build** time. After changing it you must rebuild and
redeploy — editing it on the server does nothing.

```
cd frontend && npm run build     # → frontend/dist
cd ../Admin  && npm run build    # → Admin/dist
```

Deploy `Admin/dist` to `admin.techlanditsolutions.com` (that DNS record does not
exist yet) and `frontend/dist` to `techlanditsolutions.com`.

### 4. Verify

1. Log into the admin panel with `ADMIN_LOGIN_EMAIL` / `ADMIN_PASSWORD`.
2. Clients → Add New Client, upload a logo.
3. Open the website home page. The logo should appear in *Our Clients*.

If it doesn't, open the browser console on the website. `[/clients] API unavailable`
means the site cannot reach the API — check `VITE_API_URL` in the deployed bundle
and CORS. No message but old logos still showing means the API returned an empty
list, so the upload didn't reach the database.

## Still worth doing

- **The live site is not this codebase.** `techlanditsolutions.com` currently serves
  a Create React App build (`/static/js/main.*.js`); this repo builds Vite output
  (`/assets/js/index-*.js`). Deploying `frontend/dist` replaces a different, older
  app — worth confirming that is what you intend.
- **`backend/Techland_backend` is a nested git repo, not a submodule.** There is no
  `.gitmodules`, so the parent tracks it as a bare gitlink and its history is
  effectively invisible. Either register it properly as a submodule or merge it in.
- **`frontend/src/pages/admin/`** is a dead duplicate of the admin panel, not routed
  anywhere in `App.jsx`. Safe to delete.
- **`Admin/src/routes/AdminRoute.jsx`** gates on a `localStorage` flag. That is fine
  as UI routing now that the API enforces auth on every write, but calling
  `/auth/check` on mount would drop users at the login screen when their session
  expires instead of showing failed requests.
- **Legacy `/uploads/` paths** — done, see the migration script above. The files
  in `backend/Techland_backend/public/uploads/` are now redundant copies and can
  be deleted once you are confident the migration stuck.
- **Four team/project records have placeholder names** (`kkk`, `njn`, `kkkkk`,
  `sxsxs`) left over from testing. Their images migrated fine, but you probably
  want to delete them in the admin panel before going live.
- Old `*.log` files are committed in the backend repo and should be removed.
