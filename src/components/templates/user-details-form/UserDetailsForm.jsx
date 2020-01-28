import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextInput from 'components/molecules/text-input'
import DropDown from 'components/molecules/drop-down'
import Button from 'components/atoms/button'
import Box from 'components/atoms/box'
import Text from 'components/atoms/text'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'
import EmploymentStatus from 'tokens/employment-status'

const SignupForm = () => {
  const { userDetails, setUserDetails } = useUserContext()

  return (
    <>
      <h1>Find out which cards could work for you...</h1>
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
          annualIncome: Yup.number()
            .typeError('Annual income must be a number')
            .positive('Annual income must be greater than 0')
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
          <TextInput label="First Name" name="firstName" type="text" />
          <TextInput label="Last Name" name="lastName" type="text" />
          <TextInput label="Annual income" name="annualIncome" type="text" />

          <DropDown label="Employment Status" name="employmentStatus">
            <option value="">-- select --</option>
            {EmploymentStatus.map(status => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </DropDown>
          <Box py={4}>
            <Button type="submit">
              <Text>See my results</Text>
            </Button>
          </Box>
        </Form>
      </Formik>
    </>
  )
}

export default SignupForm
