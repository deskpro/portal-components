import * as React from "react";
import { SVGProps } from "react";

const SvgGreyStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M563.9 228.4H370.7L311 44.6c-1.8-5.5-6.6-8.3-11.5-8.3-4.8 0-9.7 2.8-11.5 8.3l-59.7 183.8H35.1c-11.7 0-16.5 14.9-7.1 21.8l156.3 113.6-59.7 183.8c-2.7 8.5 4 15.8 11.5 15.8 2.4 0 4.8-.7 7-2.4l156.3-113.6L455.8 561c2.3 1.6 4.7 2.4 7 2.4 7.5 0 14.2-7.4 11.5-15.8l-59.7-183.8L571 250.2c9.5-6.9 4.6-21.8-7.1-21.8z"
      style={{
        fill: "#5f768a",
      }}
    />
  </svg>
);

export default SvgGreyStar;
