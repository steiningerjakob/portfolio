module.exports = {
  webpack: (cfg) => {
    cfg.externals.canvas = {};
    return cfg;
  },
};
