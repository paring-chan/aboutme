import React from "../../../_snowpack/pkg/react.js";
import clsx from "../../../_snowpack/pkg/clsx.js";
import styles from "../../styles/main.module.css.proxy.js";
import Skill from "./Skill.js";
const Section3 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: clsx("section", styles.section3, styles.section)
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      padding: 30
    }
  }, /* @__PURE__ */ React.createElement("h1", null, "SKILLS"), /* @__PURE__ */ React.createElement("div", {
    className: styles.skillsGrid
  }, /* @__PURE__ */ React.createElement(Skill, {
    title: "JAVASCRIPT/TYPESCRIPT",
    content: "파랑이가 제일 많이 쓰는 언어에요!"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "Kotlin",
    content: "파랑이가 제일 좋아하는 언어에요!(사실상 많이 안씀)"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "Python",
    content: "한번씩(?) 쓰는거에요!"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "Unity",
    content: "파랑이가 유일하게 할줄 아는 게임 엔진이애오!"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "React/Next.js",
    content: "파랑이가 제일 많이 쓰는 웹 프레임워크!"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "Vue/Nuxt.js",
    content: "배워뒀지만 파랑이가 잘 쓰지는 않는 웹 프레임워크!"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "Phaser 3",
    content: "잘은 모르지만 일단 써본거!"
  }), /* @__PURE__ */ React.createElement(Skill, {
    title: "C#",
    content: "얼불춤 모딩하면서 배운 언어에요!"
  }))));
};
export default Section3;
