import * as React from "react";
import { SVGProps } from "react";

const SvgDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M512.8 590.5c19.9 0 39.9-7.7 53.7-23 30.7-30.7 30.7-78.2 0-108.9l-158-158L568 140.9c30.7-30.7 30.7-78.2 0-108.9s-78.2-30.7-108.9 0L299.5 191.6 139.9 32C109.3 1.3 61.7 1.3 31 32S.3 110.2 31 140.9l159.6 159.6L31 460.1C.3 490.7.3 538.3 31 569c15.3 15.3 35.3 23 53.7 23s39.9-7.7 53.7-23l161.1-159.6L459.1 569c15.3 13.8 33.7 21.5 53.7 21.5z"
      style={{
        fill: "#a0b3c4",
      }}
    />
  </svg>
);

export default SvgDelete;
