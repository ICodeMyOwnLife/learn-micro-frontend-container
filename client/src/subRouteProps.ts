export const subRouteProps1: LinkProps[] = [
  { name: 'MF1/Home', path: '/micro-frontend-1/home' },
  { name: 'MF1/Contact', path: '/micro-frontend-1/contact' },
  { name: 'MF1/About', path: '/micro-frontend-1/about' },
  { name: 'MF1/Login', path: '/micro-frontend-1/login' },
  { name: 'MF1/Products', path: '/micro-frontend-1/products' },
];

export const subRouteProps2: LinkProps[] = [
  { name: 'MF2/Home', path: '/micro-frontend-2/home' },
  { name: 'MF2/Contact', path: '/micro-frontend-2/contact' },
  { name: 'MF2/About', path: '/micro-frontend-2/about' },
  { name: 'MF2/Login', path: '/micro-frontend-2/login' },
  { name: 'MF2/Products', path: '/micro-frontend-2/products' },
];

interface LinkProps {
  name: string;
  path: string;
}
