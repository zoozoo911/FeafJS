import Attributes from "./AttributeSetter.js";

const TextField = (params) => {
  var comp = "<input";
  comp += Attributes.Type(params.type);
  comp += Attributes.ID(params.id);
  if (params.hasOwnProperty("class")) {
    comp += Attributes.ClassName(params.class);
  }
  if (params.hasOwnProperty("placeholder")) {
    comp += Attributes.Placeholder(params.placeholder);
  }
  return comp + "></input>";
};

export default TextField;
