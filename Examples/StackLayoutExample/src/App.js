import { Component } from "feaf";
import Container1 from "./Components/Container1/Container1.js";

const App = () => {
  var obj = new Component("app");
  obj.addComponent(Container1());
  return obj.render("FEAF");
};

export default App;
