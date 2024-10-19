javascript.javascriptGenerator.forBlock['webpage'] = function(block, generator) {
  var text_name = block.getFieldValue('Title');
  var value_style = generator.valueToCode(block, 'Style', javascript.Order.ATOMIC);
  var statements_elements = generator.statementToCode(block, 'Elements');
  // TODO: Assemble javascript into code variable.
  console.log(statements_elements);
  var code = ` <html><head><title>${text_name}</title></head><body>${statements_elements}</body></html>`;
  return code;
};

javascript.javascriptGenerator.forBlock['text'] = function(block, generator) {
  var text = block.getFieldValue('Text');
  var code = `${text}`;
  return code;
};