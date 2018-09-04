const { map, range } = require('lodash');
const { demo } = require('./ex_01.js');

const demo_range = (start, end) => map(range(start, end), demo);

module.exports.f02 = () => {
  return `# =======================
# Extending from the demo
# =======================\n
const demo_range = ${demo_range.toString()}\n
> demo_range(3,6)
${demo_range(3,6).toString().replace(/\,/g, '\n')}`
}
