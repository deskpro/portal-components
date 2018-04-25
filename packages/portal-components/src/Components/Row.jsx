import React from 'react';
import PropTypes from 'prop-types';

const Row = ({
  children,
  ...props
}) => {
  return <div {...props}>{children}</div>
};

Row.propTypes = {
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

export default Row;