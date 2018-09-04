const { f01 } = require('./ex_01.js');
const { f02 } = require('./ex_02.js');
const { f03 } = require('./ex_03.js');
const { f04 } = require('./ex_04.js');

module.exports.examples = () => {
  return `${f01()}
${f02()}
${f03()}
${f04()}`
}
