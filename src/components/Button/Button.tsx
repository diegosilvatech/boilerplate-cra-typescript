import * as s from './styles';

export type ButtonProps = {
  children: React.ReactChild;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button = ({
  variant = 'primary',
  type,
  fullWidth,
  children,
  onClick
}: ButtonProps) => (
  <s.ButtonWrapper
    variant={variant}
    type={type}
    onClick={onClick}
    fullWidth={fullWidth}
  >
    {children}
  </s.ButtonWrapper>
);

export default Button;
