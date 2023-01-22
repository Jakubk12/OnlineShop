module.exports = {
  // options...
  devServer: {
    proxy: {
      "/api": {
        target: "https://www.timeapi.io",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
