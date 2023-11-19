import { StyledButton, FancyButton as StyledFancyButton } from "./ButtonStyles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: string;
  props?: React.ReactNode;
  as?: string;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const FancyButton = ({ children, ...props }: ButtonProps) => {
  return <StyledFancyButton {...props}>{children}</StyledFancyButton>;
};
