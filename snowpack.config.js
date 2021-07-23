/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  plugins: ["@snowpack/plugin-dotenv"],
  packageOptions: {
    knownEntrypoints: ["astro/dist/internal/__astro_slot.js"],
  },
};
