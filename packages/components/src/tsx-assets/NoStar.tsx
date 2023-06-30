import * as React from "react";
import { SVGProps } from "react";

const SvgNoStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m379.9 352.6 49.4 152-129.3-94-129.3 93.9 49.4-152-129.3-93.9h159.8l49.4-152 49.4 152h159.8l-129.3 94zm185-124.1H371.3L311.5 44.3c-1.8-5.6-6.6-8.3-11.5-8.3-4.8 0-9.7 2.8-11.5 8.3l-59.8 184.1H35.1c-11.7 0-16.6 15-7.1 21.8L184.6 364l-59.8 184.1c-2.8 8.5 4 15.9 11.5 15.9 2.4 0 4.8-.7 7.1-2.4L300 447.9l156.6 113.8c2.3 1.6 4.7 2.4 7.1 2.4 7.5 0 14.3-7.4 11.5-15.9l-59.8-184.1L572 250.3c9.5-6.9 4.6-21.8-7.1-21.8z"
      style={{
        fill: "#dce4eb",
      }}
    />
  </svg>
);

export default SvgNoStar;