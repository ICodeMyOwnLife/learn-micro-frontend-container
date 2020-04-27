const mfcProxyRouter = require('../../server/node_modules/cb-react-micro-frontend-server')
  .mfcProxyRouter;
module.exports = app => app.use(mfcProxyRouter);
