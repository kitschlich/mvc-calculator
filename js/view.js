var $ = require('jquery');

var View = function(controller, model) {

  this.init = function() {
    this.$button = $('button');

    this.$button.on('click', function(e) {
      var buttonVal = e.target.value;
      controller.validate(buttonVal).bind(controller);
    });
    this.render();
  };
  
  this.render = function() {
    this.$display = $('#display');
    this.$display.html(model.display);
  };
};

module.exports = View;