import type { NextConfig } from "next";

const SLUGS = [
  "maggiefast",
  "ryandube",
  "ashleystrickland",
  "jennacodespotiwright",
  "chrismckeever",
  "emilylawless",
  "franqueamundsen",
  "justinwalker",
  "marcogarcia",
  "gregopgenorth",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    // auto-generate one redirect per slug
    return SLUGS.map((slug) => ({
      source: `/${slug}`,
      destination: `https://www.homebuyerguidebooks.com/brandondoza/${slug}`,
      permanent: true, // 308/301
    }));
  },
};

export default nextConfig;



