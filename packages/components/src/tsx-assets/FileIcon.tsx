import * as React from "react";
import { SVGProps } from "react";

const SvgFileIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>{".file-icon_svg__st0{fill:#6e8293}"}</style>
    <path
      className="file-icon_svg__st0"
      d="M471 588H129.3c-29.8 0-54-24.2-54-54V62c0-29.8 24.2-54 54-54H471c29.8 0 54 24.2 54 54v472c0 29.8-24.2 54-54 54zM129.3 58.5c-1.9 0-3.6 1.7-3.6 3.6v472c0 1.9 1.7 3.6 3.6 3.6H471c1.9 0 3.6-1.7 3.6-3.6v-472c0-1.9-1.7-3.6-3.6-3.6H129.3z"
    />
    <path
      className="file-icon_svg__st0"
      d="M182.5 122.7h238.7v50.4H182.5zM182.5 222.9h238.7v50.4H182.5zM182.192 324.096l163.084-2.003.619 50.395-163.084 2.003z"
    />
  </svg>
);

export default SvgFileIcon;
