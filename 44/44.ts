// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.


function sandwich() {
  var ingridients = [];
  for (var _i = 0; _i < arguments.length; _i++) {
      ingridients[_i] = arguments[_i];
  }
  console.log("your order is ready included: ".concat(ingridients.join(', '), "."));
}
sandwich("item1", "item2", "item3");
sandwich("item4", "item5", "item6");
sandwich("item7", "item8", "item9");
