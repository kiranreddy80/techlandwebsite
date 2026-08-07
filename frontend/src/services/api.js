import axios from "axios";
import config from "../config";

const api = axios.create({
  baseURL: `${config.API_BASE_URL}${config.API_SUB_PATH}`,
  withCredentials: true,
  /**
   * Give up rather than hang.
   *
   * With no timeout set, a host that accepts the connection but never
   * answers leaves the request open for minutes. Every section that reads
   * the API already renders bundled fallback content first, so failing
   * fast costs nothing and keeps a dead backend invisible to visitors.
   *
   * 15s is generous enough for a free-tier host waking from a cold start.
   */
  timeout: 15000,
});

export default api;
