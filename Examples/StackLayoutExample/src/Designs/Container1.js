import Design from "feaf/Designer";

const style = () => {
  var desObj = new Design();
  desObj.setLayout({
    type: "stack",
    offset: "center center",
    spacing: "10px",
    bounds: "500px 500px",
  });
  desObj.setBackground({ background: "blue" });
  return desObj.design;
};

export default style;
