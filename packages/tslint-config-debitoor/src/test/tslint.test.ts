import * as path from 'path';
// Implement types for mocha-tslint to use ts syntax
require('mocha-tslint')(path.join(__dirname, '..', 'tslint.json'));
