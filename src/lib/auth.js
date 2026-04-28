import { createClient } from "@neondatabase/neon-js";

export const authClient = createClient({
  auth: {
    url: import.meta.env.VITE_NEON_AUTH_URL,
  },
  dataApi: {
    url: import.meta.env.VITE_API_URL,
  }
});
