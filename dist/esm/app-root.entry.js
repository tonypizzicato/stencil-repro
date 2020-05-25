import { r as registerInstance, h, H as Host } from './index-02fcab6d.js';

const AppRoot = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, null, h("p", null, "My name is ", this.name), h("slot", null)));
    }
};

export { AppRoot as app_root };
