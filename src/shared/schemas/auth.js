import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
// min 8 characters, 1 upper case, 1 lower case, 1 numeric, 1 special

export const signUpSchema = yup.object().shape({
  first_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'First name should contain only letters')
    .min(3, 'First name must be at least 3 characters long')
    .max(20, 'First name must be at most 20 characters long')
    .required('First name is required'),
  last_name: yup
    .string()
    .matches(/^[A-Za-z\s]+$/, 'Last name should contain only letters')
    .min(3, 'Last name must be at least 3 characters long')
    .max(20, 'Last name must be at most 20 characters long')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password must be less than 20 characters')
    .required('Password is required'),

  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),

  //   phoneNumber: yup
  //     .string()
  //     .matches(/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number')
  //     .optional(),

  //   dateOfBirth: yup
  //     .date()
  //     .max(new Date(), 'Date of birth cannot be in the future')
  //     .min(new Date(1900, 0, 1), 'Date of birth is too old')
  //     .required('Date of birth is required'),

  //   gender: yup
  //     .string()
  //     .oneOf(['male', 'female', 'other', 'prefer_not_to_say'], 'Please select a valid gender option')
  //     .required('Please select a gender'),

  //   termsAccepted: yup
  //     .boolean()
  //     .oneOf([true], 'You must accept the terms and conditions')
  //     .required('You must accept the terms and conditions'),

  //   newsletter: yup
  //     .boolean()
  //     .default(false),

  //   address: yup.object().shape({
  //     street: yup.string().required('Street address is required'),
  //     city: yup.string().required('City is required'),
  //     state: yup.string().required('State is required'),
  //     zipCode: yup
  //       .string()
  //       .matches(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code')
  //       .required('ZIP code is required'),
  //     country: yup.string().required('Country is required')
  //   }).required('Address is required')
})
