import React from 'react'
import { Formik, Form } from 'formik'
import { TextInput, DropDown } from 'components/molecules'
import { Text, Grid, Alignment, Button } from 'components/atoms'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'
import EmploymentStatus, { FakeI18n } from 'constants/employmentStatus'
import formValidationSchema from './formValidationSchema'

const SignupForm = () => {
  const { userDetails, setUserDetails } = useUserContext()

  return (
    <>
      <Text variant={{ s: 'title', l: 'subHeading' }}>
        Enter your details to find out which cards could work for you...
      </Text>

      <Formik
        initialValues={{
          ...userDetails
        }}
        validationSchema={formValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setUserDetails({
            ...values
          })
          Router.push('/results')
        }}
      >
        <Form>
          <Grid>
            <TextInput label="First Name" name="firstName" type="text" />
            <TextInput label="Last Name" name="lastName" type="text" />
            <TextInput
              label="Annual income"
              name="annualIncome"
              type="number"
            />

            <DropDown label="Employment Status" name="employmentStatus">
              <option value="">-- select --</option>
              {Object.values(EmploymentStatus).map(value => {
                return (
                  <option key={value} value={value}>
                    {FakeI18n(value)}
                  </option>
                )
              })}
            </DropDown>
          </Grid>

          <Alignment justifyContent="center" py={4}>
            <Button type="submit">
              <Text>See my results</Text>
            </Button>
          </Alignment>
        </Form>
      </Formik>
    </>
  )
}

export default SignupForm
