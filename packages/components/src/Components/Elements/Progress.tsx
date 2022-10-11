import * as React from 'react';
import classNames from 'classnames';

interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  percent: number;
  type?: string;
  className?: string;
}

/**
 * Renders the bar inside of a progress bar
 */
const ProgressBar = ({
  percent, className, children, ...rest
}: ProgressBarProps) => (
  <div
    style={{ width: `${percent}%` }}
    className={classNames('dp-progress__bar', className)}
    {...rest}
  >
    {children}
  </div>
);

enum ProgressSize {
  S = 's',
  M = 'm',
  L = 'l',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

enum ProgressType {
  Primary = 'primary',
  Cta = 'cta',
}

/** We omit Div size to avoid typing issue **/
interface ProgressProps extends Omit<React.HTMLProps<HTMLDivElement>, 'size'> {
  /**
   * The size of the progress bar.
   */
  size?: ProgressSize;
  /**
   * The type of progress bar to render.
   */
  type?: ProgressType;
  /**
   * The percentage complete.
   */
  percent: number;
  /**
   * CSS classes to apply to the element.
   */
  className?: string;
}

/**
 * Renders a progress bar.
 */
const Progress = ({
  size = ProgressSize.Large,
  type = ProgressType.Primary,
  className = '',
  percent = -1,
  ...rest
}: ProgressProps) => {

  if (percent === -1) {
    return null;
  }
  return (
    <div
      className={classNames('dp-progress', `dp-progress--${type}`, `dp-progress--${size[0]}`, className)}
      {...rest}
    >
      <ProgressBar percent={percent} />
    </div>
  );
}

export default Progress;
