'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e49f72b7.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["app-root.cjs",[[1,"app-root",{"name":[1]}]]],["my-component.cjs",[[1,"my-component",{"title":[1]}]]]], options);
});

exports.defineCustomElements = defineCustomElements;
