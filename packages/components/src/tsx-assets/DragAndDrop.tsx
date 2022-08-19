import * as React from "react";
import { SVGProps } from "react";

const SvgDragAndDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>{".drag-and-drop_svg__st0{fill:#6e8293}"}</style>
    <path
      className="drag-and-drop_svg__st0"
      d="M56.3 297.5v-48.3h48.2V201H56.3C29.7 201 8 222.7 8 249.2v48.3h48.3zM538.7 8H249.2C222.7 8 201 29.7 201 56.3V201h-48.3v48.3H201v96.5c0 26.5 21.7 48.2 48.2 48.2h96.5v48.3H394V394h144.7c26.5 0 48.3-21.7 48.3-48.2V56.3C587 29.7 565.3 8 538.7 8zm0 337.7H249.2V56.3h289.5v289.4z"
    />
    <path
      className="drag-and-drop_svg__st0"
      d="M297.5 249.2h48.3v48.3H394v-48.3c0-26.6-21.7-48.3-48.3-48.3h-48.3v48.3zM152.8 538.7h96.5V587h-96.5zM345.8 490.5v48.2h-48.3V587h48.3c26.5 0 48.3-21.7 48.3-48.3v-48.2h-48.3zM104.5 538.7H56.3v-48.2H8v48.2C8 565.3 29.7 587 56.3 587h48.2v-48.3zM8 345.7h48.3v96.5H8z"
    />
  </svg>
);

export default SvgDragAndDrop;
