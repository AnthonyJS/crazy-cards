import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from 'components/molecules/text-input'
import DropDown from 'components/molecules/drop-down'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'
import EmploymentStatus from 'tokens/employment-status'

const SignupForm = () => {
  const { userDetails, setUserDetails } = useUserContext()

  return (
    <>
      <h1>Get your status!</h1>
      <Formik
        initialValues={{
          ...userDetails
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          employmentStatus: Yup.string()
            .oneOf(EmploymentStatus, 'Invalid employment status')
            .required('Required')
        })}
        onSubmit={(values, { setSubmitting }) => {
          setUserDetails({
            ...values
          })
          Router.push('/results')
        }}
      >
        <Form>
          <TextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <TextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <TextInput
            label="Annual income"
            name="annualIncome"
            type="text"
            placeholder="43"
          />

          <DropDown label="Employment Status" name="employmentStatus">
            <option value="">Select an employment status</option>
            {EmploymentStatus.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </DropDown>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}

export default SignupForm
