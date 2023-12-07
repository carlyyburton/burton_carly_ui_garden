import { ChangeEventHandler } from "react";

export interface RadioProps {
  primary?: boolean;
  disabled?: boolean;
  label?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
