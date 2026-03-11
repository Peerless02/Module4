/**
 * nameutils.js
 * Provides a helper that decides whether to greet or bid farewell
 * to a name, depending on its first letter.
 *
 * Rule: names that start with 'j' or 'J' get a Goodbye; all others get a Hello.
 */

(function (global) {

  "use strict";

  /**
   * Given a name string, calls the appropriate greeting function from GreetUtils.
   * @param {string} name
   */
  function processName(name) {
    if (typeof name !== "string" || name.length === 0) {
      console.error("processName: expected a non-empty string, got:", name);
      return;
    }

    var firstLetter = name[0]; // same as name.charAt(0)

    if (firstLetter === "j" || firstLetter === "J") {
      global.GreetUtils.sayGoodbye(name);
    } else {
      global.GreetUtils.sayHello(name);
    }
  }

  // Expose on a namespace object
  global.NameUtils = {
    processName: processName
  };

})(window);
