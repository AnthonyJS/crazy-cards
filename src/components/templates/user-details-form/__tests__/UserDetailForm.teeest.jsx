import React from 'react'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
// import '@testing-library/jest-dom/extend-expect'
// import axiosMock from 'axios'
import UserDetailForm from '../UserDetailsForm'
import { useUserContext } from 'contexts/UserContext'

jest.mock('axios')
jest.mock('contexts/UserContext', () => ({
  useUserContext: jest.fn()
}))

test('loads and displays form', async () => {
  const { container } = render(<UserDetailForm />)
  const firstName = container.querySelector('input[name="firstName"]')
  const lastName = container.querySelector('input[name="lastName"]')
  const annualIncome = container.querySelector('input[name="annualIncome"]')
  const submit = container.querySelector('button[type="submit"]')

  await wait(() => {
    fireEvent.change(firstName, {
      target: {
        value: 'Ant'
      }
    })
  })

  await wait(() => {
    fireEvent.change(lastName, {
      target: {
        value: 'Sim'
      }
    })
  })
  await wait(() => {
    fireEvent.change(annualIncome, {
      target: {
        value: '1000000'
      }
    })
  })

  await wait(() => {
    fireEvent.click(submit)
  })
})
