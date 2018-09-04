const { filter } = require('lodash');


const isOdd = x => x%2;

module.exports.f03 = () => {
  return `# ======
# Filter
# ======\n
const isOdd = ${isOdd.toString()}\n
> [0,1,2,3,4,5,6,7,8,9].filter(isOdd)
${[0,1,2,3,4,5,6,7,8,9].filter(isOdd)}
`
}
