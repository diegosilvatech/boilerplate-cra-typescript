import * as s from './styles';

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
};

const Button = ({ variant = 'primary' }: ButtonProps) => (
  <s.ButtonWrapper variant={variant}>button label</s.ButtonWrapper>
);

export default Button;
