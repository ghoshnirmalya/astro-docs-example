// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  plugins: ["@snowpack/plugin-postcss"],
};
