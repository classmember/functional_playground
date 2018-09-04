# Functional Playground

Examples of functional style programming in JavaScript

### Contents
|   File   |       Topic       |
| -------- | ----------------- |
| ex_01.js | functional basics |
| ex_02.js | map / range       |
| ex_03.js | filter            |
| ex_04.js | reduce            |

### Project Structure
```
$ tree -I node_modules
.
├── index.js
├── lib
│   ├── examples
│   │   ├── ex_01.js
│   │   ├── ex_02.js
│   │   ├── ex_03.js
│   │   ├── ex_04.js
│   │   └── index.js
│   └── index.js
└── package.json

2 directories, 8 files
```

### Examples
```
$ node .
# ===============
# Functional demo
# ===============

const invert = x => -x
const triple = x => 3*x
const demo = val => `input: ${val}
invert: ${invert(val)}
triple: ${triple(val)}
inv+tri: ${invert(triple(val))}\n`

> demo(10)
input: 10
invert: -10
triple: 30
inv+tri: -30

# =======================
# Extending from the demo
# =======================

const demo_range = (start, end) => map(range(start, end), demo)

> demo_range(3,6)
input: 3
invert: -3
triple: 9
inv+tri: -9

input: 4
invert: -4
triple: 12
inv+tri: -12

input: 5
invert: -5
triple: 15
inv+tri: -15

# ======
# Filter
# ======

const isOdd = x => x%2

> [0,1,2,3,4,5,6,7,8,9].filter(isOdd)
1,3,5,7,9

# ======
# Reduce
# ======

const sum = (accum, val) => accum += val

> [0,1,2,3,4,5,6,7,8,9].reduce(sum)
45
```

# index.js files
```
$ cat ./index.js
'use strict';
require('./lib');
```
```
$ cat ./lib/index.js
const { examples } = require('./examples');

console.log(examples());
```
```
$ cat ./lib/examples/index.js
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
```
