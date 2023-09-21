const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "~/assets": path.resolve(__dirname, "src/assets"),
      "~/common": path.resolve(__dirname, "src/common"),
      "~/constants": path.resolve(__dirname, "src/constants"),
      "~/helpers": path.resolve(__dirname, "src/helpers"),
      "~/reducers": path.resolve(__dirname, "src/reducers"),
      "~/services": path.resolve(__dirname, "src/services"),
      "~/hooks": path.resolve(__dirname, "src/use-hooks"),
    },
  },
};
