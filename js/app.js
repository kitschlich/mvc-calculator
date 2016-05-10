var $ = require('jquery');

$(document).ready(function() {

  var model = {
    display: 0,
    operand1: undefined,
    operand2: undefined,
    operator: undefined,
    result: undefined
  };

  var controller = {
    validate: function(value) {

      if (value.match(/[0-9]/g)) {
        this.updateDigit(value);
      } else if (value == 'ac') {
        this.clearAll();
      } else if (value == 'eq') {
        this.calculate();
      } else if (value == 'dec') {
        this.addDecimal();
      } else {
        this.updateOperator(value);
      }
      view.render();
    },
    updateDigit: function(value) {
      if (!model.operand1) {
        model.operand1 = value;
        model.display = model.operand1;
      } else if (model.operand1 && !model.operator) {
        if (model.operand1.length <= 7) {
          model.operand1 += value.toString();
          model.display = model.operand1;
        }
      } else if (!model.operand2) {
        model.operand2 = value;
        model.display = model.operand2;
      } else if (model.operand2) {
        if (model.operand2.length <= 7) {
          model.operand2 += value.toString();
          model.display = model.operand2;
        }
      }
    },
    addDecimal: function() {
      if (!model.operand1) {
        model.operand1 = '0.';
        model.display = model.operand1;
      } else if (model.operand1 && !model.operator && (model.operand1.indexOf('.') == -1) && (model.operand1.length <= 7)) {
        model.operand1 += '.';
        model.display = model.operand1;
      } else if (model.operator && !model.operand2) {
        model.operand2 = '0.';
        model.display = model.operand2;
      } else if (model.operator && (model.operand2.indexOf('.') == -1) && (model.operand2.length <= 7)) {
        model.operand2 += '.';
        model.display = model.operand2;
      }
    },
    clearAll: function() {
      model.display = 0;
      model.operand1 = undefined;
      model.operand2 = undefined;
      model.operator = undefined;
    },
    calculate: function() {
      if (!model.operand2) {
        model.result = model.operand1;
      } else {
        var op1 = Number(model.operand1);
        var op2 = Number(model.operand2);

        switch (model.operator) {
          case 'add':
            model.result = op1 + op2;
            break;
          case 'subt':
            model.result = op1 - op2;
            break;
          case 'mult':
            model.result = op1 * op2;
            break;
          case 'div':
            model.result = op1 / op2;
            break;
          default:
            break;
        }
      }
      model.operand1 = model.result;
      model.display = model.operand1;
      model.operator = undefined;
      model.operand2 = undefined;
    },
    updateOperator: function(value) {
      if (!model.operator && model.operand1) {
        model.operator = value;
      } else if (model.operand2) {
        this.calculate();
        model.operator = value;
      } else {
        model.operator = value;
      }
    },
    init: function() {
      view.init();
    }
  };

  var view = {
    init: function() {
      this.$button = $('button');

      this.$button.on('click', function(e) {
        var buttonVal = e.target.value;
        controller.validate(buttonVal);
      });
      this.render();
    },
    render: function() {
      this.$display = $('#display');
      this.$display.html(model.display);
    }
  };

  controller.init();

});