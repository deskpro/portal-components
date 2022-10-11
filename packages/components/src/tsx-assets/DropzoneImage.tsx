import * as React from "react";
import { SVGProps } from "react";

const SvgDropzoneImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={53}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5.2 52.1h53.4c2.8 0 5.1-2.3 5.1-5.1V5.1c0-2.8-2.3-5.1-5.1-5.1H5.2C2.4 0 .1 2.3.1 5.1V47c-.1 2.8 2.2 5.1 5.1 5.1ZM58.6 4c.6 0 1.1.5 1.1 1.1V47c0 .6-.5 1.1-1.1 1.1H5.2c-.6 0-1.1-.5-1.1-1.1V5.1c0-.6.5-1.1 1.1-1.1h53.4Z"
      fill="#A9B0B0"
    />
    <path
      d="M51.6 43.5H12.1c-.9 0-1.7-.7-1.7-1.6 0-.4.1-.7.3-1l5.5-7.4c.5-.8 1.6-.9 2.4-.4.1 0 .1.1.2.2l5.6 5.3 13-17.6c.6-.8 1.6-.9 2.4-.4.2.1.3.3.4.4l13 19.9c.5.8.3 1.8-.5 2.3-.4.2-.7.3-1.1.3ZM19.6 21a5.9 5.9 0 1 1 0-11.8 5.9 5.9 0 0 1 0 11.8Z"
      fill="#A9B0B0"
    />
  </svg>
);

export default SvgDropzoneImage;
