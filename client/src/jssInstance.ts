/* eslint-disable no-underscore-dangle */
/* eslint-disable no-multi-assign */
import { create } from 'jss';
import { jssPreset, createGenerateClassName } from '@material-ui/core';

const win = window as any;

const jssInstance = (win._jss = win._jss || create(jssPreset()));

const muiGenerateClassName = createGenerateClassName();

function defaultGenerateClassName(rule: any, styleSheet: any) {
  return muiGenerateClassName(rule, styleSheet);
}

export const generateClassName = (win._generateClassName =
  win._generateClassName || defaultGenerateClassName);

export const sheetManager = (win._sheetManager =
  win._sheetManager || new Map());

export default jssInstance;
