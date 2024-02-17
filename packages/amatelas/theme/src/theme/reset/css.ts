import {  composeStyleSource } from '@src/style-source'

const style = /* css */ `
*:where(
  :not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)
) {
all: unset;
display: revert;
}

*,
*::before,
*::after {
box-sizing: border-box;
}

html {
-moz-text-size-adjust: none;
-webkit-text-size-adjust: none;
text-size-adjust: none;
}

:where(body) {
line-height: 1.5;
font-family: system-ui, sans-serif;
-webkit-font-smoothing: antialiased;
}

a,
button {
cursor: revert;
}

ol,
ul,
menu {
list-style: none;
}

img {
max-inline-size: 100%;
max-block-size: 100%;
}

table {
border-collapse: collapse;
}

input,
textarea {
-webkit-user-select: auto;
}

textarea {
white-space: revert;
}

meter {
-webkit-appearance: revert;
appearance: revert;
}

:where(pre) {
all: revert;
box-sizing: border-box;
}

::placeholder {
color: unset;
}

::marker {
content: initial;
}

:where([hidden]) {
display: none;
}

:where([contenteditable]:not([contenteditable='false'])) {
-moz-user-modify: read-write;
-webkit-user-modify: read-write;
overflow-wrap: break-word;
-webkit-line-break: after-white-space;
-webkit-user-select: auto;
}

:where([draggable='true']) {
-webkit-user-drag: element;
}

:where(dialog:modal) {
all: revert;
box-sizing: border-box;
}
`

export const reset = composeStyleSource({}, style)
