
// Anonymous function that calls itself - this helps keep variables contained, so they don't leak into the global
// scope.  This method of function is typically a little faster and should only be used for the file's main function.
(function () {
  // Best practice: initialize all variables at the beginning of the function wher they will be used.
  var list = ["Write the to do app", "Create item", "Remove item"];


  // This form of function lets you assign it to an object like object.addItem = function () {}. I prefer this form
  // more because I like the flexibility. I use the this object to expose the addItem function to global scope for
  // our html to recognize the function.
  // Note: The downside to this form is that some browsers won't know what the
  // name is and will declare the name as anonymous.
  this.addItem = function () {
    // This is the pure JavaScript way of accessing the DOM (Document Object Model).
    // here we are grabbing the textField element and assigning it to a variable so we can continue using it.
    var itemBeingAdded = document.getElementById("text-field");

    // TODO: Make sure to call the displayList Function when you are done adding an item to the list array.
  };

  // TODO: Remember to add the removeItem function

  // This needs to be called when ever you change the list array object.
  var displayList = function () {
    var todoListElement = document.getElementById("todo-list"); // ul element
    var newLI;
    var i = 0;

    todoListElement.innerHTML = ""; // clear all of the ul element

    for (i = 0; i < list.length; i++) {
      newLI = document.createElement("LI");
      newLI.innerHTML = list[i];
      todoListElement.appendChild(newLI);
    }
  };
  displayList();


})();