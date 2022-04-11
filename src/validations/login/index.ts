import * as yup from 'yup';

export const loginValidationSchema = yup
  .object({
    email: yup
      .string()
      .email('must be a valid email')
      .required('email is required'),
    password: yup.string().min(4).required('password is required')
  })
  .required();
