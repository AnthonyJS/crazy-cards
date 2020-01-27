import { Formik, Form } from 'formik'
import TextInput from 'components/molecules/text-input'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'

const validate = values => {
  const errors = {}
  if (isNaN(values.salary)) {
    errors.salary = 'Must be a number'
  }
  if (!isNaN(values.salary) && values.salary <= 0) {
    errors.salary = 'Must be greater than 0'
  }
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
              id="salary"
              label="Salary"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors.salary}
              touched={touched.salary}
            />

            <TextInput
              id="password"
              label="Password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
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
