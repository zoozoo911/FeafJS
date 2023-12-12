import setLayout from "./LayoutManager.js";

class Design {
  constructor() {
    // this.id = id;
    this.design = {};
  }

  setLayout(layoutObject) {
    var layout = setLayout(layoutObject);
    this.design = {
      ...this.design,
      ...layout,
    };
  }

  setBackground(obj) {
    this.design = {
      ...this.design,
      ...{
        background: obj.background,
      },
    };
  }
}

export default Design;
