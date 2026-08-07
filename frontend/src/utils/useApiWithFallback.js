import { useEffect, useState } from "react";
import api from "../services/api";
import config from "../config";

/**
 * Turns whatever the backend stored into a URL the browser can load.
 *
 * Cloudinary uploads are already absolute (https://res.cloudinary.com/...).
 * Local-disk uploads are stored as "/uploads/<type>/<file>" and have to be
 * prefixed with the API host.
 */
export const resolveImageUrl = (src) => {
  if (!src) return "";
  if (/^(https?:)?\/\//i.test(src) || src.startsWith("data:")) return src;
  if (src.startsWith("/uploads/")) return `${config.ASSETS_URL}${src}`;
  // Anything else is a static asset already served by the frontend.
  return src;
};

/**
 * Fetch a collection from the API and fall back to bundled static data when the
 * backend is unreachable, errors, or simply has no rows yet.
 *
 * This is what makes admin uploads show up on the site the moment a backend is
 * live, without the section going blank when it isn't.
 *
 * @param {string}   endpoint  API path, e.g. "/clients"
 * @param {Function} mapItem   maps one API document to the shape the UI expects
 * @param {Array}    fallback  static data used when the API yields nothing
 */
export default function useApiWithFallback(endpoint, mapItem, fallback) {
  const [items, setItems] = useState(fallback);
  const [source, setSource] = useState("static");

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const { data } = await api.get(endpoint);
        if (cancelled) return;

        const active = Array.isArray(data)
          ? data.filter((d) => d.isActive !== false).map(mapItem)
          : [];

        // An empty API response is not a reason to blank the section.
        if (active.length) {
          setItems(active);
          setSource("api");
        }
      } catch (error) {
        if (!cancelled) {
          console.warn(`[${endpoint}] API unavailable, using static data.`, error?.message);
        }
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  return { items, source };
}
