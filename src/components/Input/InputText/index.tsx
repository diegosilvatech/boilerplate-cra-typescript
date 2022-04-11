import { InputHTMLAttributes } from 'react';

import * as s from './styles';

export type InputTextProps = {
  name: string;
  label?: string;
  type?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
} & InputHTMLAttributes<HTMLInputElement>;

const InputText = ({
  name,
  label,
  type = 'text',
  icon,
  iconPosition,
  register,
  ...rest
}: InputTextProps) => (
  <s.Wrapper aria-label="FieldText component">
    {!!label && (
      <s.LabelWrapper>
        <s.Label>{label}</s.Label>
      </s.LabelWrapper>
    )}
    <s.FieldTextWrapper>
      {!!icon && (
        <s.IconWrapper iconPosition={iconPosition}>{icon}</s.IconWrapper>
      )}
      <s.FieldText
        type={type}
        name={name}
        iconPosition={iconPosition}
        {...register(name, { required: true })}
        {...rest}
      />
    </s.FieldTextWrapper>
  </s.Wrapper>
);

export default InputText;
