/**
 * Home
 *
 * File: /src/js/home.js
 * Project: Baythium Packer Client
 * Organization: Baythium Ecosystem: https://baythium.com
 */

'use strict';

/* ************** */
/* CUSTOM IMPORTS */
/* ************** */
import Stargazer from "./modules/stargazer.js";

/* Dynamically import the module using ES2020 features */
// let module = await import('/modules/stargazer.js');

/* ************************************************************************* */

((w, _) => {
  "use strict";

  w.addEventListener("DOMContentLoaded", _ => {
    Stargazer.inititialize();
  });
})(window, document);
