import React, { forwardRef } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';

const ForwardRefNavLink = forwardRef<HTMLAnchorElement, ForwardRefNavLinkProps>(
  ({ ...props }, ref) => <NavLink {...props} ref={ref} />,
);

ForwardRefNavLink.displayName = 'ForwardRefNavLink';

export default ForwardRefNavLink;

export interface ForwardRefNavLinkProps extends NavLinkProps {}
