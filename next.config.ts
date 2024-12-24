import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    MISTRAL_AGENT_ID: process.env.MISTRAL_AGENT_ID,
    MISTRAL_API_KEY: process.env.MISTRAL_API_KEY,
  }
};

export default nextConfig;
