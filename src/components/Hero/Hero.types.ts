import { MouseEventHandler } from "react";

export interface HeroProps {
  text?: string;
  p?: string;
  src?: string;
  alt?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
