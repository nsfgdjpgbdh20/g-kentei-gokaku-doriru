module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { unstable_transformImportMeta: true }]],
    plugins: [
      // Required for expo-router - Removed as it's included in babel-preset-expo now
      // 'expo-router/babel',
    ],
  };
}; 