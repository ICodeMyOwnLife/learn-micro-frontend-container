import React, { FC, memo } from 'react';
import { History } from 'history';
import { generateContainerId, useMicroFrontend } from './utils';

export const MicroFrontendComponent: FC<MicroFrontendProps> = ({
  doc = document,
  history,
  host,
  name,
  win = window,
}) => {
  useMicroFrontend({ doc, history, host, name, win });
  return <main id={generateContainerId(name)} />;
};

const MicroFrontend = memo(MicroFrontendComponent);
MicroFrontend.displayName = 'MicroFrontend';
export default MicroFrontend;

export interface MicroFrontendProps {
  doc?: Document;
  history: History;
  host: string;
  name: string;
  win?: Window;
}
