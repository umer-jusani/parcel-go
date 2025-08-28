import * as yup from 'yup'

export const userSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(20, 'First name must be less than 20 characters')
    .required('First name is required'),
  last_name: yup
    .string()
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name must be less than 20 characters')
    .required('Last name is required'),
  role: yup.string().required('Role is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .required('Password is required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
  // only numbers
})

export const userSchemaForUpdate = yup.object().shape({
  first_name: yup
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(20, 'First name must be less than 20 characters')
    .required('First name is required'),
  last_name: yup
    .string()
    .min(3, 'Last name must be at least 3 characters')
    .max(20, 'Last name must be less than 20 characters')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  country: yup.object().optional().nullable(),
  company_type: yup.object().optional().nullable(),
})
