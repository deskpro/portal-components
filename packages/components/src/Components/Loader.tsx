import * as React from 'react';
import classNames from 'classnames';
import { SVGProps } from "react";


const LoadingImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 16 16"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g className="st0">
      <path className="st1"
            d="M8 2c3.3 0 6 2.7 6 6s-2.7 6-6 6 -6-2.7-6-6S4.7 2 8 2M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8S12.4 0 8 0L8 0z"/>
    </g>
    <path className="st2" d="M8 2V0C3.6 0 0 3.6 0 8h2C2 4.7 4.7 2 8 2z"/>
    <path className="st3"
          d="M2 8c0-1.7 0.7-3.2 1.8-4.2L2.3 2.3C0.9 3.8 0 5.8 0 8s0.9 4.2 2.3 5.7l1.4-1.4C2.7 11.2 2 9.7 2 8z"/>
    <path className="st1"
          d="M8 0v2c3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.7 0-3.2-0.7-4.2-1.8l-1.4 1.4C3.8 15.1 5.8 16 8 16c4.4 0 8-3.6 8-8C16 3.6 12.4 0 8 0z"/>
  </svg>
);

export enum LoaderSize {
  XS = 'xsmall',
  S = 'small',
  M = 'medium',
  L = 'large',
  XL = 'xlarge',
}

interface LoaderProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /**
   * Displays the loader at the given size.
   */
  size?: LoaderSize;
  /**
   * Hide the loader when true.
   */
  hidden?: boolean;
  /**
   * CSS classes to apply to the element.
   */
  className?: string;
}

/**
 * Loader component.
 */
const Loader = ({
  size = LoaderSize.XL,
  hidden = false,
  className = ''
}: LoaderProps) => {
  let cssSize = size.toString();
  if (cssSize[0] === 'x') {
    cssSize = cssSize.substring(0, 2);
  } else {
    cssSize = cssSize[0]; // eslint-disable-line prefer-destructuring
  }

  return (
    <LoadingImg
      className={classNames(
        `dp-loader dp-loader--${cssSize}`,
        {
          'dp-loader--hidden': hidden
        },
        className
      )}
    />
  );
}

export default Loader;
