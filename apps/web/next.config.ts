import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to the monorepo root. Otherwise Next.js walks up the
  // tree and may infer the wrong root from unrelated lockfiles in $HOME
  // (e.g. ~/package-lock.json).
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

export default nextConfig;
