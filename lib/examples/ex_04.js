const { reduce } = require('lodash');

const sum = (accum, val) => accum += val;

module.exports.f04 = () => {
  return `# ======
# Reduce
# ======\n
const sum = ${sum.toString()}\n
> [0,1,2,3,4,5,6,7,8,9].reduce(sum)
${[0,1,2,3,4,5,6,7,8,9].reduce(sum)}`;
}
