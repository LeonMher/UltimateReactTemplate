import { StyledButton } from "./ButtonStyles";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  props?: React.ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
