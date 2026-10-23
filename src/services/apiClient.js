const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");
export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA !== "false";

export async function apiGet(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: { Accept: "application/json", ...(options.headers || {}) },
    signal: options.signal
  });
  if (!response.ok) {
    throw new Error(`API request failed (${response.status}) for ${path}`);
  }
  return response.json();
}

export { API_BASE_URL };
