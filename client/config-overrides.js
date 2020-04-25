module.exports = (config, env) => {
  const isProduction = env === 'production';
  const isDevelopment = env === 'development';

  (config.output.filename = isProduction
    ? 'static/js/[name].[contenthash:8].mfc.js'
    : isDevelopment && 'static/js/bundle.mfc.js'),
    (config.output.chunkFilename = isProduction
      ? 'static/js/[name].[contenthash:8].chunk.mfc.js'
      : isDevelopment && 'static/js/[name].chunk.mfc.js');
  return config;
};
