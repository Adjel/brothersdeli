/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/Home",
      },
      {
        source: "/notre-histoire",
        destination: "/Brand",
      },
      {
        source: "/la-carte",
        destination: "/Menu",
      },
      {
        source: "/devenir-franchise",
        destination: "/BecomeFranchise",
      },
      {
        source: "/contact",
        destination: "/Contact",
      },
    ];
  },
};

export default nextConfig;
