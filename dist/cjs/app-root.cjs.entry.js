'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e49f72b7.js');

const AppRoot = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    connectedCallback() {
        console.log("app-root: connectedCallback called");
    }
    disconnectedCallback() {
        console.log("app-root: disconnectedCallback called");
    }
    componentWillLoad() {
        console.log("app-root: componentWillLoad called");
        console.log(`Prop name: ${this.name}`);
    }
    componentDidLoad() {
        console.log("app-root: componentDidLoad called");
    }
    componentDidUnload() {
        console.log("app-root: componentDidUnload called");
    }
    render() {
        return (index.h(index.Host, null, index.h("p", null, "My name is ", this.name), index.h("slot", null)));
    }
};

exports.app_root = AppRoot;
