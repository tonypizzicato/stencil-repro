import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
  shadow: true,
})
export class MyComponent {
  @Prop() title: string;

  componentWillMount() {
    console.log("MyComponent: componentWillMount");
  }

  render() {
    return <div>Hello, World! I'm {this.title}</div>;
  }
}
