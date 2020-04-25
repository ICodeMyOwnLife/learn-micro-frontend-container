import { MicroFrontendRouteProps } from 'cb-react-micro-frontend';
import { microFrontend1Host, microFrontend2Host } from 'constants/hosts';

const routeProps: MicroFrontendRouteProps[] = [
  {
    host: microFrontend1Host!,
    microFrontendName: 'micro-frontend-1',
    path: '/micro-frontend-1',
  },
  {
    host: microFrontend2Host!,
    microFrontendName: 'micro-frontend-2',
    path: '/micro-frontend-2',
  },
];

export default routeProps;
