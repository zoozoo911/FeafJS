const ID = (value) => {
    return ' id="' + value + '"';
  },
  ClassName = (value) => {
    return ' class="' + value + '"';
  },
  Type = (value) => {
    return ' type="' + value + '"';
  },
  Placeholder = (value) => {
    return ' placeholder="' + value + '"';
  },
  Events = {
    onClick: (f) => {
      return " onClick={" + functionToString(f) + "}";
    },
  };

const Attributes = {
  ID: ID,
  ClassName: ClassName,
  Type: Type,
  Placeholder: Placeholder,
  Events: Events,
};

export default Attributes;
