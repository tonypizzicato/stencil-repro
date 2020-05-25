import { r as registerInstance, h } from './index-02fcab6d.js';
var myComponentCss = ":host{display:block}";
var MyComponent = /** @class */ (function () {
    function MyComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    MyComponent.prototype.componentWillMount = function () {
        console.log("MyComponent: componentWillMount");
    };
    MyComponent.prototype.render = function () {
        return h("div", null, "Hello, World! I'm ", this.title);
    };
    return MyComponent;
}());
MyComponent.style = myComponentCss;
export { MyComponent as my_component };
