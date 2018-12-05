'use strict'

var 
    gulp        = require('gulp'),
    fs          = require('fs'),
    typeFilter  = require('./util/typeFilter');
    
var tasks = fs.readdirSync('./build/tasks/').filter(typeFilter);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});
