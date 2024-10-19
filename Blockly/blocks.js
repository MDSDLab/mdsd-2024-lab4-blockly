Blockly.Blocks['webpage'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Title")
        .appendField(new Blockly.FieldTextInput("default"), "Title");
    this.appendValueInput("Style")
        .setCheck(null)
        .appendField("Style");
    this.appendStatementInput("Elements")
        .setCheck(null)
        .appendField("Elements");
    this.setInputsInline(false);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text123")
        .appendField(new Blockly.FieldTextInput("default"), "Text");
    this.setColour(160);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setPreviousStatement(true, null);
  }
};