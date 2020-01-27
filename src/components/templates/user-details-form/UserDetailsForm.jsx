import { Formik, Form } from 'formik'
import TextInput from 'components/molecules/text-input'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'

const validate = values => {
  const errors = {}
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
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
              id="salary"
              label="Salary"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
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
