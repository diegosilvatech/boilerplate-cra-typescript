import * as s from './styles';

export type ButtonProps = {
  children: React.ReactChild;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

const Button = ({ variant = 'primary', children, onClick }: ButtonProps) => (
  <s.ButtonWrapper variant={variant} onClick={onClick}>
    {children}
  </s.ButtonWrapper>
);

export default Button;
