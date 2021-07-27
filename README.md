Harness Helpers
---------------

Helper functions for Harness.

![Status](https://github.com/harnessflex/helpers/actions/workflows/test.yml/badge.svg)
![Statements](https://img.shields.io/badge/statements-97.75%25-brightgreen.svg)
![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg)
![Lines](https://img.shields.io/badge/lines-97.75%25-brightgreen.svg)
## Install

This package is automatically installed with the Harness Flex Framework.

```
npm i @harnessflex/helpers
```

## Basic Usage

```js

import { dotNotation, slug } from '@harnessflex/helpers'

slug 'hello world', '-' // hello-world

const test = {
    app: {
        name: 'Harness'
    }
}

dotNotation test, 'app.name' // Harness

```

### API


Helper         | Params                                   | Description
:--------------|:-----------------------------------------|:----------
`config`       | `notation: string, default: string/null` | Get config value.
`dotNotation`  | `object: object, notation: string`       | Get config value.
`env`          | `key: string, default: string/null`      | Get env value.
`isArray`      | `value: mixed`                           | Check if value is an array.
`isBoolean`    | `value: mixed`                           | Check if value is a boolean.
`isFunction`   | `value: mixed`                           | Check if value is a function.
`isNumber`     | `value: mixed`                           | Check if value is a number.
`isObject`     | `value: mixed`                           | Check if value is an object.
`isString`     | `value: mixed`                           | Check if value is a string.
`slug`         | `value: string, separator: string`       | Turn string into a slug.
`toBoolean`    | `value: mixed`                           | Convert value into boolean.

> This is a wip

Security
--------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.