const Label = (params) => {
  var res = '<label id="' + params.id + '"';
  if (params.hasOwnProperty("class")) {
    res += ' class="' + params.class + '">' + params.value + "</label>";
  } else {
    res += ">" + params.value + "</label>";
  }
  return res;
};

export default Label;
