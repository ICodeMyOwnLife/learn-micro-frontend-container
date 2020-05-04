/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
import React, { ReactNode, useContext } from 'react';
import { create } from 'jss';
import { jssPreset, createGenerateClassName } from '@material-ui/core';

const win = window as any;

const jss = (win._jss = win._jss || create(jssPreset()));

const generateClassName = (win._generateClassName =
  win._generateClassName || createGenerateClassName());

const sheetsManager = (win._sheetsManager = win._sheetsManager || new Map());
const defaultOptions = {
  disableGeneration: false,
  generateClassName,
  jss,
  sheetsCache: null,
  sheetsManager,
  sheetsRegistry: null,
};
export const StylesContext = (win._StylesContext =
  win._StylesContext || React.createContext(defaultOptions));

const StylesProvider = ({ children }: { children: ReactNode }) => {
  const outerOptions = useContext(StylesContext) as any;
  const context = {
    ...outerOptions,
    disableGeneration: false,
    generateClassName,
    jss,
    sheetsCache: null,
    sheetsManager,
    sheetsRegistry: null,
  };

  return (
    <StylesContext.Provider value={context}>{children}</StylesContext.Provider>
  );
};

export default StylesProvider;
