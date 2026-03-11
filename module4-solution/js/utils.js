/**
 * utils.js
 * Utility library providing sayHello and sayGoodbye functions.
 *
 * Both functions expect a single string argument and log a greeting
 * to the browser console.
 */

(function (global) {

  // 'use strict' prevents accidental global variable creation
  "use strict";

  /**
   * Logs "Hello <name>" to the console.
   * @param {string} name
   */
  function sayHello(name) {
    if (typeof name !== "string") {
      console.error("sayHello: argument must be a string");
      return;
    }
    console.log("Hello " + name);
  }

  /**
   * Logs "Goodbye <name>" to the console.
   * @param {string} name
   */
  function sayGoodbye(name) {
    if (typeof name !== "string") {
      console.error("sayGoodbye: argument must be a string");
      return;
    }
    console.log("Goodbye " + name);
  }

  // Expose functions on a single namespace object attached to the global scope
  global.GreetUtils = {
    sayHello:   sayHello,
    sayGoodbye: sayGoodbye
  };

})(window);
