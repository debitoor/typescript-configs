"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
// Implement types for mocha-tslint to use ts syntax
require('mocha-tslint')(path.join(__dirname, '..', 'tslint.json'));
