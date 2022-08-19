import * as React from 'react';

const Submit = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) =>
  <button type="submit" className="dp-pc_submit" {...props}>{children}</button>;

export default Submit;
