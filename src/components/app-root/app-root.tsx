import { Component, Prop, h, Host } from "@stencil/core";

@Component({
  tag: "app-root",
  shadow: true,
})
export class AppRoot {
  // Indicate that name should be a public property on the component
  @Prop() name: string;

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
    return (
      <Host>
        <p>My name is {this.name}</p>

        <slot></slot>
      </Host>
    );
  }
}
