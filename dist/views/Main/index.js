import React from "../../../_snowpack/pkg/react.js";
import ReactFullpage from "../../../_snowpack/pkg/@fullpage/react-fullpage.js";
import styles from "../../styles/main.module.css.proxy.js";
import clsx from "../../../_snowpack/pkg/clsx.js";
import Section1 from "./Section1.js";
import Section3 from "./Section3.js";
import Section2 from "./Section2.js";
const MainPage = () => {
  return /* @__PURE__ */ React.createElement(ReactFullpage, {
    scrollOverflow: true,
    licenseKey: "7A6BD9E1-8D334350-80A4BC34-64E1097D",
    render: () => /* @__PURE__ */ React.createElement("div", {
      id: "fullpage-wrapper"
    }, /* @__PURE__ */ React.createElement(Section1, null), /* @__PURE__ */ React.createElement(Section2, null), /* @__PURE__ */ React.createElement(Section3, null), /* @__PURE__ */ React.createElement("div", {
      className: clsx("section", styles.section3, styles.section)
    }, "3"))
  }, "와!");
};
export default MainPage;
