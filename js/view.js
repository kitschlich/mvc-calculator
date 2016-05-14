var $ = require('jquery');

var View = function() {

  this.onInput = null;
  
  this.init = function() {
    this.$button = $('button');

    this._onInput = function(e) {
      var buttonVal = e.target.value;
      if (this.onInput) {
        this.onInput(buttonVal);
      }
    };
    
    this.$button.on('click', this._onInput.bind(this));
    this.render();
  };
  
  this.render = function(displayVal) {
    this.$display = $('#display');
    this.$display.html(displayVal || 0);
  };
};

module.exports = View;