import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // GitHub Pages serves a static export; native anchors avoid unsupported RSC prefetches.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  globalIgnores([".next/**", ".next-stale-*/**", "_next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
