import * as React from "react";

export type Option = {
  label?: string | React.ReactElement;
  value?: string;
  parents?: Option[]
}
