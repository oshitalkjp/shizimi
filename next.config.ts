import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/shizimi', // リポジトリ名を設定
  assetPrefix: '/shizimi',
  /* config options here */
  // reactCompiler: true, // v19以降やCanaryで有効な場合があるが一旦コメントアウト
};

export default nextConfig;
