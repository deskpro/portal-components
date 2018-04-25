import React from 'react';
import PropTypes from 'prop-types';

const Col = ({
               children,
               ...props
             }) => {
  return <div {...props}>{children}</div>
};

Col.propTypes = {
  /**
   * Children to render.
   */
  children:  PropTypes.node
};

export default Col;