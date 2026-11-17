import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function pagesBase(): string {
  const raw = process.env.BASE_PATH?.trim();
  if (!raw || raw === "/") return "/";
  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
}

export default defineConfig({
  plugins: [react()],
  // GitHub Actions sets BASE_PATH from the Pages site (works for
  // user sites and project sites). Local dev stays at /.
  base: pagesBase(),
});
