import * as React from 'react';

const Row = ({
  children = null,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) =>
  <div {...props}>{children}</div>;

export default Row;
