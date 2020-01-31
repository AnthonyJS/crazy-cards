import * as Yup from 'yup'
import EmploymentStatus from 'constants/employmentStatus'

const formValidationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  annualIncome: Yup.number()
    .typeError('Annual income must be a number')
    .positive('Annual income must be greater than 0')
    .required('Required'),
  employmentStatus: Yup.string()
    .oneOf(
      Object.values(EmploymentStatus).map(e => `${e}`),
      'Invalid employment status'
    )
    .required('Required')
})

export default formValidationSchema
