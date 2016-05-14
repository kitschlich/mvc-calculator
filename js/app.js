var $ = require('jquery');
var Model = require('./model.js');
var Controller = require('./controller.js');
var View = require('./view.js');

$(document).ready(function() {

  var mvcCalc = {};
  
  mvcCalc.model = new Model();
  
  mvcCalc.view = new View(mvcCalc.model); 
  
  mvcCalc.controller = new Controller(mvcCalc.model, mvcCalc.view);
  
 
  mvcCalc.controller.init();

});


// the view shouldn't be trying to talk to the controller!