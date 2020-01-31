import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput, DropDown } from 'components/molecules'
import Button from 'components/atoms/button'
import Alignment from 'components/atoms/alignment'
import { Text, Grid } from 'components/atoms'
import { useUserContext } from 'contexts/UserContext'
import Router from 'next/router'
import EmploymentStatus, { FakeI18n } from 'constants/employmentStatus'

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
            .oneOf(
              Object.values(EmploymentStatus).map(e => `${e}`),
              'Invalid employment status'
            )
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
          <Grid>
            <TextInput label="First Name" name="firstName" type="text" />
            <TextInput label="Last Name" name="lastName" type="text" />
            <TextInput label="Annual income" name="annualIncome" type="text" />

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
