import { createClient } from "@neondatabase/neon-js";

export const authClient = createClient({
  url: import.meta.env.VITE_NEON_AUTH_URL,
});
