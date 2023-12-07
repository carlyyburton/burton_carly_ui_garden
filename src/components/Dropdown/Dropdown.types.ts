import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface DropdownProps {
  label?: string;
  name?: string;
  options?: any;
  primary?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
