import { r as registerInstance, h } from './index-02fcab6d.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillMount() {
        console.log("MyComponent: componentWillMount");
    }
    render() {
        return h("div", null, "Hello, World! I'm ", this.title);
    }
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
