import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import App from "./App.js";
import "./styles/index.css.proxy.js";
import {fab} from "../_snowpack/pkg/@fortawesome/free-brands-svg-icons.js";
import {library} from "../_snowpack/pkg/@fortawesome/fontawesome-svg-core.js";
import {fas} from "../_snowpack/pkg/@fortawesome/free-solid-svg-icons.js";
library.add(fab, fas);
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
