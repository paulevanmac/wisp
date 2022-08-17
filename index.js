import { sanitize } from "./src/sanitize.mjs";
import { render } from "./src/wisp.mjs";
import app from "./src/app.mjs";

render(app, document.getElementById("root"));
