
export let code = "._section1_z2jvg_1 {\n  background-color: #001122;\n  font-family: \"Gugi\", cursive;\n  color: #fff;\n}\n\n._section2_z2jvg_7 {\n  background-color: #001122;\n  color: #fff;\n}\n._section2_z2jvg_7 ._aboutGrid_z2jvg_11 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  width: 90vw;\n}\n\n._section3_z2jvg_18 {\n  background: #0080ff;\n  color: #fff;\n}\n._section3_z2jvg_18 ._skillsGrid_z2jvg_22 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  width: 90vw;\n  margin-left: auto;\n  margin-right: auto;\n  justify-self: center;\n  margin-top: 20px;\n  flex-grow: 1;\n}\n._section3_z2jvg_18 ._skillsGrid_z2jvg_22 ._skillCardContainer_z2jvg_33 {\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  color: #000;\n}\n\n._section4_z2jvg_40 {\n  background: #fff;\n  color: #000;\n}\n\n._section_z2jvg_1 {\n  text-align: center;\n}";
let json = {"section1":"_section1_z2jvg_1","section2":"_section2_z2jvg_7","aboutGrid":"_aboutGrid_z2jvg_11","section3":"_section3_z2jvg_18","skillsGrid":"_skillsGrid_z2jvg_22","skillCardContainer":"_skillCardContainer_z2jvg_33","section4":"_section4_z2jvg_40","section":"_section_z2jvg_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}