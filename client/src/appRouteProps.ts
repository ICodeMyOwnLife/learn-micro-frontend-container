import mfRouteProps from 'mfRouteProps';

const appRouteProps: LinkProps[] = [
  { name: 'Home', path: '/' },
  ...mfRouteProps.map(({ microFrontendName, path }) => ({
    name: microFrontendName,
    path,
  })),
  { name: 'Login', path: '/login' },
  { name: 'Products', path: '/products' },
];

export default appRouteProps;

interface LinkProps {
  name: string;
  path: string;
}
