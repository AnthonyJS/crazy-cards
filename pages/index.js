import React from 'react'
import styled from 'styled-components'
import Box from 'components/atoms/box'
import { Formik } from 'formik'
import TextInput from 'components/molecules/text-input'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default () => (
  <>
    <Title>My page</Title>
    <Box py={{ s: 5, m: 3, l: 4, xl: 5 }} bg="navy">
      gfgdf
    </Box>
    <Formik
      initialValues={{}}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address'
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
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
        <form onSubmit={handleSubmit}>
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
            id="email"
            label="Email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            errors={errors.email}
            touched={touched.email}
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
        </form>
      )}
    </Formik>
  </>
)
