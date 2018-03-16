# tslint-config-debitoor

[![Build Status](https://travis-ci.org/debitoor/typescript-configs.svg?branch=master)](https://travis-ci.org/debitoor/typescript-configs)

Defines global linting rules for Debitoor typescript porojects

You can find all tslint rules [here](https://palantir.github.io/tslint/rules/).

## Usage

```bash
npm i -DE @debitoor/tslint-config-debitoor
npm i -DE tslint
npm i -DE mocha-tslint
echo "import * as path from 'path';require('mocha-tslint')(path.join(__dirname, '..', 'tslint.json'));" > test/tslint.spec.js
echo "module.exports = { "extends": "@debitoor/tslint-config-debitoor" };" > tslint.json
```

Or add a `tslint.json` file in the root of your project, and extend it with the Debitoor config:

```typescript
{
	'extends': '@debitoor/tslint-config-debitoor'
}
```

## Add tests

Install mocha-tslint:

```bash
npm install -DE mocha-tslint
```

and add a a spec file `tslint.spec.js` in your test folder, where you specify the path to your tslint config file, and an array of folders to test in:

```typescript
import * as path from 'path';
require('mocha-tslint')(path.join(__dirname, '..', 'tslint.json')[
	'test',
	'src',
	]);
```

or lint all files that are placed in a folder in src:

```typescript
import * as path from 'path';
require('mocha-tslint')(path.join(__dirname, '..', 'tslint.json'), 'src/*');
```

or leave out the array to just lint everything from the directory of your `tslint.json`.

```typescript
import * as path from 'path';
require('mocha-tslint')(path.join(__dirname, '..', 'tslint.json'));
```

[npm mocha-tslint](https://www.npmjs.com/package/mocha-tslint)