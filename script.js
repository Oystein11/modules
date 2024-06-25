import { return_name } from "./js/return_name.js";

return_name ();

import { theme_toggle } from "./js/theme_toggle.js";

const theme_toggle_button = document.querySelector ("#theme_toggle_button");
console.log (theme_toggle_button);
theme_toggle_button.addEventListener ("click", theme_toggle);