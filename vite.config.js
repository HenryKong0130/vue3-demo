export default {
  proxy: {
    "/api": {
      target: "http://127.0.0.1:5500/%E8%AF%BE%E4%BB%B6",
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
