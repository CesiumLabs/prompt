# Simple Prompt
Simple prompt for node.js

# Installing

```sh
$ npm i simple-prompt
```

# Example

```js
const { prompt } = require("simple-prompt");

const name = prompt("What is your name?\n-> ");

console.log(`\n\nHello ${name}!`);
```