import { r as registerInstance, h, H as Host } from './index-02fcab6d.js';
var AppRoot = /** @class */ (function () {
    function AppRoot(hostRef) {
        registerInstance(this, hostRef);
    }
    AppRoot.prototype.connectedCallback = function () {
        console.log("app-root: connectedCallback called");
    };
    AppRoot.prototype.disconnectedCallback = function () {
        console.log("app-root: disconnectedCallback called");
    };
    AppRoot.prototype.componentWillLoad = function () {
        console.log("app-root: componentWillLoad called");
        console.log("Prop name: " + this.name);
    };
    AppRoot.prototype.componentDidLoad = function () {
        console.log("app-root: componentDidLoad called");
    };
    AppRoot.prototype.componentDidUnload = function () {
        console.log("app-root: componentDidUnload called");
    };
    AppRoot.prototype.render = function () {
        return (h(Host, null, h("p", null, "My name is ", this.name), h("slot", null)));
    };
    return AppRoot;
}());
export { AppRoot as app_root };
