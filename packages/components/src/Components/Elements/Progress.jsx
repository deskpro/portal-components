import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { objectKeyFilter } from '@deskpro/js-utils/dist/objects';

/**
 * Renders the bar inside of a progress bar
 */
const ProgressBar = ({
  percent, className, children, ...props
}) => (
  <div
    style={{ width: `${percent}%` }}
    className={classNames('dp-progress__bar', className)}
    {...props}
  >
    {children}
  </div>
);

ProgressBar.propTypes = {
  /**
   * The type of progress bar to render.
   */
  type:      PropTypes.string,
  /**
   * The percentage complete.
   */
  percent:   PropTypes.number,
  /**
   * CSS classes to apply to the element.
   */
  className: PropTypes.string,
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

ProgressBar.defaultProps = {
  percent:   0,
  type:      'primary',
  className: '',
  children:  ''
};

/**
 * Renders a progress bar.
 */
class Progress extends React.Component {
  static propTypes = {
    /**
     * The size of the progress bar.
     */
    size:      PropTypes.oneOf(['s', 'm', 'l', 'small', 'medium', 'large']),
    /**
     * The type of progress bar to render.
     */
    type:      PropTypes.oneOf(['primary', 'cta']),
    /**
     * The percentage complete.
     */
    percent:   PropTypes.number,
    /**
     * CSS classes to apply to the element.
     */
    className: PropTypes.string
  };

  static defaultProps = {
    size:      'large',
    type:      'primary',
    className: '',
    percent:   -1,
  };

  render() {
    const {
      size, type, className, percent, ...props
    } = this.props;

    if (percent === -1) {
      return null;
    }
    return (
      <div
        className={classNames('dp-progress', `dp-progress--${type}`, `dp-progress--${size[0]}`, className)}
        {...objectKeyFilter(props, Progress.propTypes)}
      >
        <ProgressBar percent={percent} />
      </div>
    );
  }
}

export default Progress;
