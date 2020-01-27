import { Formik, Form } from 'formik'
import TextInput from 'components/molecules/text-input'
import DropDown from 'components/molecules/drop-down'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'
import EmploymentStatus from 'tokens/employment-status'

const validate = values => {
  const errors = {}
  if (isNaN(values.annualIncome)) {
    errors.annualIncome = 'Must be a number'
  }
  if (!isNaN(values.annualIncome) && values.annualIncome <= 0) {
    errors.annualIncome = 'Must be greater than 0'
  }
  // console.log('values.employmentStatus', values.employmentStatus)
  // if (
  //   values.employmentStatus === 'nope' ||
  //   values.employmentStatus === undefined
  // ) {
  //   errors.employmentStatus = 'needs selection'
  // }
  return errors
}

const UserDetailsForm = () => {
  const { userDetails, setUserDetails } = useUserContext()

  return (
    <>
      <Formik
        initialValues={{}}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          setUserDetails({
            ...values
          })
          Router.push('/results')
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <TextInput
              id="firstname"
              label="First name"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextInput
              id="surname"
              label="Surname"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextInput
              id="annualIncome"
              label="Annual Income"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.annualIncome}
              touched={touched.annualIncome}
            />
            <DropDown
              id="employmentStatus"
              options={EmploymentStatus}
              label="Employment Status"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.employmentStatus}
              touched={touched.employmentStatus}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default UserDetailsForm
