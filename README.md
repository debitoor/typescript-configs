# typescript-configs

## Development

This repository relies on [Lerna](https://github.com/lerna/lerna) which is a tool for managing JavaScript projects with multiple packages.

Each sub folder of `./packages` is its own package and will be published on its own. All packages in this project runs on `independent` version mode.

## Publish

When you have made your changes **and** have pushed to master, you can publish.

This is done using the command `npm run publish` in the root of the project.

Lerna will make a prompt for each package you have included changes in, to select a new semver version of each package and will then publish it to npm. This will also create- and push git tags (which creates a new release version). Remember to edit this with a descript of the changes on [Github](https://github.com/debitoor/typescript-configs/releases).

* Read more about [Lerna publish](https://github.com/lerna/lerna/tree/master/commands/publish#readme).

## License

MIT License

Copyright (c) 2018 [Debitoor](https://debitoor.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.