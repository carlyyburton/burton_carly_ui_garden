import { ChangeEventHandler } from "react";

export interface RadioProps {
  primary?: boolean;
  disabled?: boolean;
  label?: any;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
}
