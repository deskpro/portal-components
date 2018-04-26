import React from 'react';
import PropTypes from 'prop-types';

const Col = ({
  children,
  ...props
}) => <div {...props}>{children}</div>;

Col.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node
};

Col.defaultProps = {
  children: null
};

export default Col;
