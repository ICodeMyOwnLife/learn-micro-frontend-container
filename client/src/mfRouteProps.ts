import { MicroFrontendRouteProps } from 'cb-react-micro-frontend';
import { MICRO_FRONTEND_1_HOST, MICRO_FRONTEND_2_HOST } from 'constants/hosts';

const mfRouteProps: MicroFrontendRouteProps[] = [
  {
    host: MICRO_FRONTEND_1_HOST!,
    microFrontendName: 'micro-frontend-1',
    path: '/micro-frontend-1',
  },
  {
    host: MICRO_FRONTEND_2_HOST!,
    microFrontendName: 'micro-frontend-2',
    path: '/micro-frontend-2',
  },
];

export default mfRouteProps;
