import * as React from "react";
import { SVGProps } from "react";

const SvgAttach = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.5 7.65V16c0 .85.65 1.5 1.5 1.5s1.5-.65 1.5-1.5V6.65c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5v9.75c0 1.95 1.55 3.5 3.5 3.5s3.5-1.55 3.5-3.5V7.65"
      stroke="#4C4F50"
      strokeWidth={1.3}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAttach;
