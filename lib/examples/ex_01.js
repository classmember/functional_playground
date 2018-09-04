
const invert = x => -x;
const triple = x => 3*x;
const demo = val => `input: ${val}
invert: ${invert(val)}
triple: ${triple(val)}
inv+tri: ${invert(triple(val))}\n`;

module.exports.f01 = () => {
  return `# ===============
# Functional demo
# ===============\n
const invert = ${invert.toString()}
const triple = ${triple.toString()}
const demo = ${demo.toString()}\n
> demo(10)
${demo(10)}`
}

module.exports.demo = demo;
