'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-e49f72b7.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    componentWillMount() {
        console.log("MyComponent: componentWillMount");
    }
    render() {
        return index.h("div", null, "Hello, World! I'm ", this.title);
    }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
