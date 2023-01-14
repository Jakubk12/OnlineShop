module.exports = {
  // options...
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.timeapi.io/api/Time/current/zone",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
