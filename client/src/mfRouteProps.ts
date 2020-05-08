import { MicroFrontendRouteProps } from 'cb-react-micro-frontend';
import config from 'learn-micro-frontend-config';

console.log(config);

const mfRouteProps = config.mfRouteMap.map<MicroFrontendRouteProps>(
  ({ host, name }) => ({ host, microFrontendName: name, path: `/${name}` }),
);

export default mfRouteProps;
