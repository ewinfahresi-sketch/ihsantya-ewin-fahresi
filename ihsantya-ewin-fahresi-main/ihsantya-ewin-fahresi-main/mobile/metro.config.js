const { getDefaultConfig } = require("@react-native/metro-config");
const path = require("path");

const projectRoot = path.resolve(__dirname);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(projectRoot);

  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg", "ts", "tsx"],
    },
  };
})();
