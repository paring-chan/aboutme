import React from "../../../_snowpack/pkg/react.js";
import clsx from "../../../_snowpack/pkg/clsx.js";
import styles from "../../styles/main.module.css.proxy.js";
import ProfileImage from "../../assets/images/profile.png.proxy.js";
const Section1 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("section", styles.section1, styles.section)
  }, /* @__PURE__ */ React.createElement("img", {
    src: ProfileImage,
    alt: "profile",
    width: 128,
    style: {borderRadius: "50%"}
  }), /* @__PURE__ */ React.createElement("h1", null, "파랑이"), /* @__PURE__ */ React.createElement("div", {
    style: {fontSize: 24}
  }, "진짜 개발*만* 할줄 아는 파랑이애오!"));
};
export default Section1;
