// Budget Controller
let budgetController = (function() {})();

// UI controller
let UIController = (function() {
  let DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, //will be inc or exp
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

//Global Controller
let controller = (function(budgetCrtl, UICtrl) {
  let DOM = UICtrl.getDOMStrings();
  let ctrlAddItem = function() {
    // get field input data

    var input = UICtrl.getInput();
    console.log(input);
    // add item to budget controller
    // add item to the UI
    // calculate the budget
    // display the budget on the UI
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
