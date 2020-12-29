# Prompt Simple
Simple prompt for node.js

# Installing

```sh
$ npm i prompt-simple
```

# Example

```js
const { prompt } = require("prompt-simple");

const name = prompt("What is your name?\n-> ");

console.log(`\n\nHello ${name}!`);
```