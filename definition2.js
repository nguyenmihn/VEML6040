const veml6040ColorBlock = "#ae00ae";

Blockly.Blocks["uno_veml6040_read"] = {
  init: function () {
    this.jsonInit({
      colour: veml6040ColorBlock,
      tooltip: "",
      message0: "cảm biến màu sắc đọc giá trị %1",
      args0: [
        {
          type: "field_dropdown",
          name: "RGB",
          options: [
            ["RED", "r"],
            ["GREEN", "g"],
            ["BLUE", "b"],
          ],
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_veml6040_detect"] = {
  init: function () {
    this.jsonInit({
      colour: veml6040ColorBlock,
      tooltip: "",
      message0: "cảm biến màu sắc phát hiện màu %1",
      args0: [
        {
          type: "field_dropdown",
          name: "color",
          options: [
            ["trắng", "w"],
            ["đen", "d"],
            ["đỏ", "r"],
            ["xanh lá (green)", "g"],
            ["xanh dương (blue)", "b"],
            ["vàng", "y"]
          ],
        }
      ],
      output: "Boolean",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_veml6040_read_lux"] = {
  init: function () {
    this.jsonInit({
      colour: veml6040ColorBlock,
      tooltip: "",
      message0: "cảm biến màu sắc đọc giá trị ánh sáng",
      name: "LUX",
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Blocks["uno_veml6040_read_cct"] = {
  init: function () {
    this.jsonInit({
      colour: veml6040ColorBlock,
      tooltip: "",
      message0: "cảm biến màu sắc đọc giá trị nhiệt độ",
      name: "CCT",
      output: "Number",
      helpUrl: "",
    });
  },
};

Blockly.Python["uno_veml6040_read"] = function (block) {
  var RGB = block.getFieldValue("RGB");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = 'from color_sensor import *';
  Blockly.Python.definitions_['init_color_sensor'] = 'veml6040 = ColorSensorVEML6040()';
  var code = "veml6040.get_red('" + RGB + "')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uno_veml6040_detect"] = function (block) {
  var color = block.getFieldValue("color");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = 'from color_sensor import *';
  Blockly.Python.definitions_['init_color_sensor'] = 'veml6040 = ColorSensorVEML6040()';
  var code = "veml6040.detect('" + color + "')";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uno_veml6040_read_lux"] = function (block) {
  var LUX = block.getFieldValue("LUX");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = 'from color_sensor import *';
  Blockly.Python.definitions_['init_color_sensor'] = 'veml6040 = ColorSensorVEML6040()';
  var code = "veml6040.get_lux(1)";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["uno_veml6040_read_cct"] = function (block) {
  var CCT = block.getFieldValue("CCT");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_color_sensor'] = 'from color_sensor import *';
  Blockly.Python.definitions_['init_color_sensor'] = 'veml6040 = ColorSensorVEML6040()';
  var code = "veml6040.get_cct(1)";
  return [code, Blockly.Python.ORDER_NONE];
};