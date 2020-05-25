'use strict';

const index = require('./index-e49f72b7.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["app-root.cjs",[[1,"app-root",{"name":[1]}]]],["my-component.cjs",[[1,"my-component",{"title":[1]}]]]], options);
});
