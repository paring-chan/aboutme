import React from "../../../_snowpack/pkg/react.js";
import clsx from "../../../_snowpack/pkg/clsx.js";
import styles from "../../styles/main.module.css.proxy.js";
import ProfileImage from "../../assets/images/profile.png.proxy.js";
import IconButton from "../../../_snowpack/pkg/@material-ui/core/IconButton.js";
import {FontAwesomeIcon} from "../../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
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
  }, "진짜 개발*만* 할줄 아는 파랑이애오!"), /* @__PURE__ */ React.createElement("div", {
    style: {display: "flex", gap: 10, justifyContent: "center", marginTop: 10}
  }, /* @__PURE__ */ React.createElement(IconButton, {
    color: "inherit",
    target: "_blank",
    href: "https://github.com/pikokr"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fab", "github"]
  })), /* @__PURE__ */ React.createElement(IconButton, {
    color: "inherit",
    target: "_blank",
    href: "https://youtube.com/c/pikokr"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fab", "youtube"]
  })), /* @__PURE__ */ React.createElement(IconButton, {
    color: "inherit",
    target: "_blank",
    href: "https://twitch.tv/pikokr"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fab", "twitch"]
  })), /* @__PURE__ */ React.createElement(IconButton, {
    color: "inherit",
    target: "_blank",
    href: "https://discord.com/users/628595345798201355"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fab", "discord"]
  })), /* @__PURE__ */ React.createElement(IconButton, {
    color: "inherit",
    href: "mailto:parangee9706@gmail.com"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fas", "envelope"]
  }))));
};
export default Section1;
