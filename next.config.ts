import type { NextConfig } from "next";
import { addBasePath } from "./utils/isGIthubPage";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export",
  basePath: addBasePath()
};

export default nextConfig;
