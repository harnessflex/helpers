Harness Helpers
---------------

Helper functions for Harness.

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-97.94%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/branches-92.45%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/lines-97.94%25-brightgreen.svg) |

## Install

This package is automatically installed with the Harness Flex Framework.

```
npm i @harnessflex/helpers
```

## Basic Usage

```js

import { object_dot, slug } from '@harnessflex/helpers'

slug 'hello world', '-' // hello-world

const test = {
    app: {
        name: 'Harness'
    }
}

object_dot test, 'app.name' // Harness

```

### API


Helper      | Params                                   | Description
:-----------|:-----------------------------------------|:----------
config      | `notation: string, default: string/null` | Get config value.
env         | `key: string, default: string/null`      | Get env value.
object_dot  | `object: object, notation: string`       | Get value from object.
slug        | `value: string, separator: string`       | Turn string into a slug.
toBoolean   | `value: mixed`                           | Convert value into boolean.

> This is a wip

Security
--------

If you discover any security related issues, please email donaldpakkies@gmail.com instead of using the issue tracker.

License
-------

The MIT License (MIT). Please see [License File](LICENSE) for more information.