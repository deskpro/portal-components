import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({
  children,
  ...props
}) => <button className="dp-pc_submit" {...props}>{children}</button>;

Submit.propTypes = {
  children: PropTypes.node
};

Submit.defaultProps = {
  children: null
};

export default Submit;
