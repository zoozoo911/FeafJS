import { Elements, Component } from "feaf";

const design = () => {
  var obj = new Component("Container1");
  var tf = Elements.TextField({
    id: "tf",
    type: "text",
    placeholder: "Enter something",
  });
  var but = Elements.Button({ id: "but", label: "Click me" });
  obj.addElements([tf, but]);
  return obj.render("FEAF");
};

export default design;
