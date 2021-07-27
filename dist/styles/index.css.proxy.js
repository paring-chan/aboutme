// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Jua&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Gugi&display=swap\");\nhtml,\nbody {\n  margin: 0;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0;\n}\n\nh1 {\n  font-family: \"Gugi\", cursive;\n  font-size: 48px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}