/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */

import { getEnv } from '@/utils/get-env';

export const consoleLog = (...args: any[]) => {
  const { ENV } = getEnv();

  if (ENV?.toLocaleLowerCase() === 'development') {
    console.log(...args);
  }
};

export const consoleError = (...args: any[]) => {
  const { ENV } = getEnv();

  if (ENV?.toLocaleLowerCase() === 'development') {
    console.error(...args);
  }
};
