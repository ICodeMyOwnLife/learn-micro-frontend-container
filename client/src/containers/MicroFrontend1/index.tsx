import React, { FC, memo } from 'react';
import MicroFrontend from 'components/MicroFrontend';
import { RouteComponentProps } from 'react-router';
import { microFrontend1Host } from 'constants/hosts';

export const MicroFrontend1Component: FC<RouteComponentProps> = ({
  history,
}) => (
  <MicroFrontend
    history={history}
    host={microFrontend1Host!}
    name="MicroFrontend1"
  />
);

const MicroFrontend1 = memo(MicroFrontend1Component);
MicroFrontend1.displayName = 'MicroFrontend1';
export default MicroFrontend1;
