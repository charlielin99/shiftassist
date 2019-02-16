const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@primary-color": "#429bd7",
      "@link-color": "#429bd7",
    //   "@heading-color": "#fff",
      "@font-family": "'Montserrat', sans-serif"
    }
  })
);
