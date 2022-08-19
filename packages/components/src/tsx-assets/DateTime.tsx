import * as React from "react";
import { SVGProps } from "react";

const SvgDateTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 600 600"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>{".date-time_svg__st0{fill:#b7c4cf}"}</style>
    <path
      className="date-time_svg__st0"
      d="M271.1 283.7h225V112.8c-.7-9.2-4-17.8-11.2-25.1-7.3-7.3-15.8-10.6-25.1-10.6h-35.6v-27c0-12.5-4.6-23.1-13.2-31.7S391.9 5.2 379.3 5.2h-17.8c-12.5 0-23.1 4.6-31.7 13.2s-13.2 19.1-13.2 31.7v27.1H209V50.1c0-12.5-4.6-23.1-13.2-31.7S176.7 5.2 164.1 5.2h-17.8c-12.5 0-23.1 4.6-31.7 13.2s-13.2 19.1-13.2 31.7v27.1H65.8c-9.9 0-17.8 3.3-25.1 10.6S30.1 103 30.1 112.9v359c0 9.9 3.3 17.8 10.6 25.1s15.2 10.6 25.1 10.6h205.5V472h-.3v-80.5h.3v-17.8h-.3v-90zm188.7-98.3v80.5h-80.5v-80.5h80.5zM352.2 50.8h35.6v63.4h-35.6V50.8zm-81.1 134.6h89.7v80.5h-89.7v-80.5zm-134-135.3h35.6v63.4h-35.6V50.1zm8.6 421.7H65.2v-80.5h80.5v80.5zm0-98.3H65.2v-89.7h80.5v89.7zm0-107.6H65.2v-80.5h80.5v80.5zm107.6 205.9h-89.7v-80.5h89.7v80.5zm0-98.3h-89.7v-89.7h89.7v89.7zm0-107.6h-89.7v-80.5h89.7v80.5z"
    />
    <path
      className="date-time_svg__st0"
      d="M433.7 301c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 259c-63.4 0-115.1-51.6-115.1-115.1 0-63.4 51.6-115.1 115.1-115.1 63.4 0 115 51.6 115 115.1.1 63.5-51.5 115.1-115 115.1z"
    />
    <path
      className="date-time_svg__st0"
      d="M446.1 362.2h-29v89l58.4 56.1 20.1-20.8-49.5-47.7z"
    />
  </svg>
);

export default SvgDateTime;
