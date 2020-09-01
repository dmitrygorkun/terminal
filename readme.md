# Terminal

Small wrapper for working with the console. Designed for a consistent style across all products.

## Install

```
$ yarn add @gorkun/terminal
```

## Usage

```js
import {terminal} from "@gorkun/terminal";

terminal.info('Hello');

const loader = terminal.loader('Loading unicorns');

setTimeout(() => {
    loader.succeed('Finish');
}, 1000);
```