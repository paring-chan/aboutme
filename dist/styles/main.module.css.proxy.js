
export let code = "._section1_5p0u5_1 {\n  background-color: #001122;\n  font-family: \"Gugi\", cursive;\n  color: #fff;\n}\n\n._section2_5p0u5_7 {\n  background: #0080ff;\n  color: #fff;\n}\n._section2_5p0u5_7 ._skillsGrid_5p0u5_11 {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 10px;\n  width: 90vw;\n  margin-left: auto;\n  margin-right: auto;\n  justify-self: center;\n  margin-top: 20px;\n  flex-grow: 1;\n}\n._section2_5p0u5_7 ._skillsGrid_5p0u5_11 ._skillCardContainer_5p0u5_22 {\n  background: #fff;\n  border-radius: 5px;\n  padding: 10px;\n  color: #000;\n}\n\n._section3_5p0u5_29 {\n  background: #fff;\n  color: #000;\n}\n\n._section_5p0u5_1 {\n  text-align: center;\n}";
let json = {"section1":"_section1_5p0u5_1","section2":"_section2_5p0u5_7","skillsGrid":"_skillsGrid_5p0u5_11","skillCardContainer":"_skillCardContainer_5p0u5_22","section3":"_section3_5p0u5_29","section":"_section_5p0u5_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}