import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable built in SWC styled componentes transform faster than Babel
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
