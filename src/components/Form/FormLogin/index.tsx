import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { loginValidationSchema } from 'validations/login';

import { Input, Button } from 'components';

import * as s from './styles';

type FormDataProps = {
  email: string;
  password: string;
};

export type FormLoginProps = {
  onSubmit: (formData: FormDataProps) => void;
};

const FormLogin = ({ onSubmit }: FormLoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormDataProps>({
    resolver: yupResolver(loginValidationSchema)
  });

  const handleSubmitForm: SubmitHandler<FormDataProps> = (formData) => {
    onSubmit(formData);
  };

  return (
    <s.Wrapper
      aria-label="FormLogin component"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <Input.InputText name="email" label="email" register={register} />
      <s.ErrorMessageWrapper>
        {errors.email && (
          <s.ErrorMessage>{errors.email.message}</s.ErrorMessage>
        )}
      </s.ErrorMessageWrapper>
      <Input.InputText
        name="password"
        label="password"
        type="password"
        register={register}
      />
      <s.ErrorMessageWrapper>
        {errors.password && (
          <s.ErrorMessage>{errors.password.message}</s.ErrorMessage>
        )}
      </s.ErrorMessageWrapper>
      <Button type="submit" fullWidth>
        sign in
      </Button>
    </s.Wrapper>
  );
};

export default FormLogin;
