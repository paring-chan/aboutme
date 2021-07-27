import React from "../../../_snowpack/pkg/react.js";
import styles from "../../styles/main.module.css.proxy.js";
const Skill = ({title, content}) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.skillCardContainer
  }, /* @__PURE__ */ React.createElement("h4", null, title), content);
};
export default Skill;
