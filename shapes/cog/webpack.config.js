const { loadParticlesShape } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesShape("cog", "Cog", version, __dirname);
