const FreeformLayout = (obj) => {
  return {
    position: "absolute",
    width: obj.width,
    height: obj.height,
    left: "50%",
    top: "50%",
    transform: {
      translate: {
        horizontal: "50%",
        vertical: "50%",
      },
    },
  };
};

function checkString(str) {
  var chars = "0123456789";
  for (var i = 0; i < chars.length; i++) {
    if (str.includes(chars[i])) {
      return true;
    }
  }
  return false;
}

const StackLayout = (obj) => {
  obj.offset = obj.offset.trim();
  var tokenizeOffset = obj.offset.split(" ");
  obj.offset = {
    x: tokenizeOffset[0],
    y: tokenizeOffset[1],
  };
  obj.bounds = obj.bounds.trim();
  var tokenizeBounds = obj.bounds.split(" ");
  obj.width = tokenizeBounds[0];
  obj.height = tokenizeBounds[1];
  var customAlign = {};
  if (obj.offset.hasOwnProperty("y")) {
    if (checkString(obj.offset.y)) {
      customAlign = {
        ...customAlign,
        ...{
          "box-sizing": "border-box",
          "padding-bottom": obj.offset.y,
        },
      };
    } else console.log("fienf-->", obj.offset.y);
  }
  if (obj.offset.hasOwnProperty("x")) {
    if (checkString(obj.offset.x)) {
      customAlign = {
        ...customAlign,
        ...{
          "box-sizing": "border-box",
          "padding-left": obj.offset.x,
        },
      };
    }
  }
  return {
    ...customAlign,
    ...{
      display: "flex",
      height: obj.height,
      width: obj.width,
      gap: obj.spacing,
      "flex-direction": "column-reverse",
      "justify-content": obj.offset.hasOwnProperty("y")
        ? obj.offset.y == "center"
          ? "center"
          : obj.offset.y == "start"
          ? "flex-start"
          : obj.offset.y == "end"
          ? "flex-end"
          : null
        : "flex-start",
      "align-items": obj.offset.hasOwnProperty("x")
        ? obj.offset.x == "center"
          ? "center"
          : obj.offset.x == "start"
          ? "flex-start"
          : obj.offset.x == "end"
          ? "end"
          : "stretch"
        : "stretch",
    },
  };
};

const setLayout = (obj) => {
  if (obj.type == "freeform") {
    return FreeformLayout();
  } else if (obj.type == "stack") {
    return StackLayout(obj);
  }
};

export default setLayout;
