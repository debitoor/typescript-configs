# typescript-eslint-config

Configurations package for `typescript-eslint` to extend from.

## Usage

1. Install the module:
  ```
  npm i -ED @debitoor/typescript-eslint-config
  ```
2. Create a file `.eslintrc.json` in the root of the project and extend the module:
  ```yaml
  extends: "./node_modules/@debitoor/typescript-eslint-config"
  ```
  * **Notice** for some reason unknown, it is not possible to extend by the package name directly, you have to write the package path in `node_modules`
3. Install eslint locally:
  ```
  npm i -ED eslint
  ```
