import type { NextConfig } from "next";

// Check for GitHub Actions environment or production mode
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: isGitHubActions ? "/JurosCompostos" : "",
  trailingSlash: true,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
