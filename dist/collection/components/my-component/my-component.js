import { Component, Prop, h } from "@stencil/core";
export class MyComponent {
    componentWillMount() {
        console.log("MyComponent: componentWillMount");
    }
    render() {
        return h("div", null,
            "Hello, World! I'm ",
            this.title);
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get styleUrls() { return {
        "$": ["my-component.css"]
    }; }
    static get properties() { return {
        "title": {
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
            "attribute": "title",
            "reflect": false
        }
    }; }
}
