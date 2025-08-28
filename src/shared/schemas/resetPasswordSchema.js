import * as Yup from 'yup'

const resetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*[0-9])|(?=.*[!@#$%^&*])/,
      'Password must contain at least one number or special character'
    )
    .required('Old Password is required'),
  new_password: Yup.string()
    .notOneOf(
      [Yup.ref('password')],
      'New password cannot be same as old password'
    )
    .min(6, 'Password must be at least 6 characters long')
    .matches(
      /^(?=.*[0-9])|(?=.*[!@#$%^&*])/,
      'Password must contain at least one number or special character'
    )
    .required('Password is required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
})

export default resetPasswordSchema
