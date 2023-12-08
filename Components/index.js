import { TextField, Label, Button } from "./Elements/index.js";

class Component {
  constructor(id) {
    this.id = id;
    this.components = [];
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  addComponent(component) {
    this.elements.push(component);
  }

  addComponents(components) {
    for (var i = 0; i < components.length; i++) {
      this.elements.push(components[i]);
    }
  }

  addElements(elements) {
    for (var i = 0; i < elements.length; i++) {
      this.elements.push(elements[i]);
    }
  }

  render(type) {
    var res = "";
    res = '<div id="' + this.id + '">\n';
    for (var i = 0; i < this.elements.length; i++) {
      res += this.elements[i] + "\n";
    }
    res += "</div>\n";
    return res;
  }
}

const Elements = {
  TextField: (params) => {
    return TextField(params);
  },
  Label: (params) => {
    return Label(params);
  },
  Button: (params) => {
    return Button(params);
  },
};

export { Elements, Component };
