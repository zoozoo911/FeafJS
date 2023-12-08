import Attributes from "./AttributeSetter.js";

const Button = (params) => {
  var res = "<button";
  res += Attributes.ID(params.id);
  if (params.hasOwnProperty("class")) {
    res += Attributes.ClassName(params.class);
  }
  if (params.hasOwnProperty("events"))
    if (params.events.hasOwnProperty("onClick")) {
      console.log("-->", Attributes.Events.onClick(params.events.onClick));
      res += Attributes.Events.onClick(params.events.onClick);
    }
  res += ">" + params.label + "</button";
  return res;
};

export default Button;
