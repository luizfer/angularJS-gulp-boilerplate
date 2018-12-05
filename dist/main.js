(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var $=require("jquery"),angular=require("angular"),app=angular.module("ExampleApp",[]);require("./directives"),require("./controllers"),require("./services");

},{"./controllers":3,"./directives":5,"./services":6,"angular":"angular","jquery":"jquery"}],2:[function(require,module,exports){
"use strict";function ExampleCtrl(e){e.Src="./assets/images/img-1.jpg",e.Hello="Boilerplate angularJS + GULP and Browserify"}ExampleCtrl.$inject=["$scope"],module.exports=ExampleCtrl;

},{}],3:[function(require,module,exports){
"use strict";var ExampleCtrl=require("./ExampleCtrl"),app=require("angular").module("ExampleApp");app.controller("ExampleCtrl",ExampleCtrl);

},{"./ExampleCtrl":2,"angular":"angular"}],4:[function(require,module,exports){
"use strict";module.exports=function(){return{restrict:"E",templateUrl:"./views/ExampleTamplate.html",transclude:!0}};

},{}],5:[function(require,module,exports){
"use strict";var ExampleDir=require("./ExampleDir"),app=require("angular").module("ExampleApp");app.directive("exampleApp",ExampleDir);

},{"./ExampleDir":4,"angular":"angular"}],6:[function(require,module,exports){
"use strict";var app=require("angular").module("ExampleApp");

},{"angular":"angular"}]},{},[1]);
