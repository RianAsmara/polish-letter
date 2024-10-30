import { env } from 'next-runtime-env';

export const getEnv = () => {
  const isServerSide = typeof window === 'undefined';

  if (isServerSide) {
    return {
      API_URL: process.env.API_URL,
      ENV: process.env.ENV,
    };
  }

  return {
    API_URL: env('NEXT_PUBLIC_API_URL'),
    ENV: env('NEXT_PUBLIC_ENV'),
  };
};
