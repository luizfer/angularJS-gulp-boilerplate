'use strict';

var ExampleDir = require('./ExampleDir');
var app          = require('angular').module('ExampleApp');

app.directive('exampleApp', ExampleDir);