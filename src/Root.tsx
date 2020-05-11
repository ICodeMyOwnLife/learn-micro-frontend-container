import React, { FC, memo } from 'react';
import { MicroFrontendContainer } from 'sp-ops-micro-frontend';
import App from 'App';

export const RootComponent: FC = () => {
  return (
    <MicroFrontendContainer>
      <App />
    </MicroFrontendContainer>
  );
};

const Root = memo(RootComponent);
Root.displayName = 'Root';
export default Root;
