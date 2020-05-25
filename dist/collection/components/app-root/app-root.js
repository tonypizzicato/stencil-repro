import { Component, Prop, h, Host } from "@stencil/core";
export class AppRoot {
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
        return (h(Host, null,
            h("p", null,
                "My name is ",
                this.name),
            h("slot", null)));
    }
    static get is() { return "app-root"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        }
    }; }
}
