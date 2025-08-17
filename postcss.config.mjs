const config = {
  plugins: ["@tailwindcss/postcss"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // allow any Unsplash path
      },
      // { protocol: "https", hostname: "plus.unsplash.com", pathname: "/**" },
    ],
  }
};

export default config;
