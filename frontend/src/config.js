/**
 * Where the frontend looks for its API.
 *
 * VITE_API_URL is read at BUILD time, not run time — Vite substitutes the
 * literal string into the bundle, so changing it always means rebuilding.
 *
 * Three values are meaningful:
 *
 *   ""                        same origin. The API is served from the very
 *                             domain the page came from (a Vercel function
 *                             under /api), so requests go to "/api/..." with
 *                             no host at all. No CORS, and no way to end up
 *                             calling http:// from an https:// page.
 *   "https://api.example.com" a separate host, with CORS and TLS on it.
 *   unset                     local development against localhost:5000.
 *
 * The empty string has to be distinguished from "unset" deliberately: `||`
 * treats "" as missing and would silently send a production build to
 * localhost, which fails only once it is deployed.
 */
const configuredUrl = import.meta.env.VITE_API_URL;

const API_BASE_URL =
    configuredUrl === undefined ? "http://localhost:5000" : configuredUrl.replace(/\/+$/, "");

const config = {
    API_BASE_URL,

    // The relative path for the API endpoints
    API_SUB_PATH: "/api",

    // Public URL for uploaded assets. Empty when the API is same-origin,
    // which leaves stored paths like "/uploads/x.png" resolving against the
    // site itself — exactly what we want.
    get ASSETS_URL() {
        return this.API_BASE_URL;
    },
};

export default config;
