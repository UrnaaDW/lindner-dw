/** @type {import('next').NextConfig} */
const isStaticExport = process.env.EXPORT_STATIC === "true";

const nextConfig = {
  output: isStaticExport ? "export" : undefined,
  distDir: isStaticExport ? "out" : ".next",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
