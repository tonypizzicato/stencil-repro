import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-repro',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    { 
	type: 'dist-hydrate-script' 
    } 
  ]
};
