var $ = require('jquery');
var Model = require('./model.js');
var Controller = require('./controller.js');
var View = require('./view.js');

$(document).ready(function() {

  var mvcCalc = {};
  
  mvcCalc.model = new Model();
  
  mvcCalc.view = new View(mvcCalc.controller, mvcCalc.model); 
  
  mvcCalc.controller = new Controller(mvcCalc.model, mvcCalc.view);
  
 
  mvcCalc.controller.init();

});