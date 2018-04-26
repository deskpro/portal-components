import React from 'react';
import PropTypes from 'prop-types';

const Row = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;

Row.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node
};

Row.defaultProps = {
  children: null
};

export default Row;
