import { p as patchBrowser, b as bootstrapLazy } from './index-02fcab6d.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["app-root", [[1, "app-root", { "name": [1] }]]], ["my-component", [[1, "my-component", { "title": [1] }]]]], options);
});
