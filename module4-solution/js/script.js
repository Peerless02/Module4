/**
 * script.js  –  Module 4 Assignment main script
 *
 * Assignment rules
 * ----------------
 * Loop over the `names` array below.
 * • If a name starts with 'j' or 'J'  → print  "Goodbye <name>"
 * • Otherwise                          → print  "Hello <name>"
 *
 * The actual printing is delegated to two external libraries that have
 * already been loaded via <script> tags in index.html:
 *   • GreetUtils  (utils.js)    – exposes sayHello() and sayGoodbye()
 *   • NameUtils   (nameutils.js) – exposes processName(), which applies
 *                                  the j/J rule and calls GreetUtils
 */

(function () {
  "use strict";

  // ─── Step 1: Define the array of names ───────────────────────────────────
  var names = [
    "John",
    "Alice",
    "Jasmine",
    "Bob",
    "Jane",
    "Charlie",
    "jessica",
    "Diana",
    "james",
    "Eve"
  ];

  // ─── Step 2: Loop over every name and call NameUtils.processName ─────────
  for (var i = 0; i < names.length; i++) {
    NameUtils.processName(names[i]);
  }

  /*
   * Expected console output:
   *   Goodbye John
   *   Hello Alice
   *   Goodbye Jasmine
   *   Hello Bob
   *   Goodbye Jane
   *   Hello Charlie
   *   Goodbye jessica
   *   Hello Diana
   *   Goodbye james
   *   Hello Eve
   */

})();
