import * as React from 'react';

const Col = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => <
  div {...props}>{children}</div>;

export default Col;
