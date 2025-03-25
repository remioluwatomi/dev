import type { NextConfig } from "next";
import isGithubPage from "./utils/isGIthubPage";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: isGithubPage() ? "/dev" : ""
};

export default nextConfig;
