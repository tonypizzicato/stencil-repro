import { a as patchEsm, b as bootstrapLazy } from './index-02fcab6d.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["app-root",[[1,"app-root",{"name":[1]}]]],["my-component",[[1,"my-component",{"title":[1]}]]]], options);
});

export { defineCustomElements };
