import { fullTimeUser, partTimeUser, studentUser } from './test-data/users'
import availableCards from 'constants/availableCards'
import eligibility from '../eligibility'
import employmentStatus from 'constants/employmentStatus'
import each from 'jest-each'

describe('Card eligibility', () => {
  each`
    user            | expected
    ${studentUser}  | ${1}
    ${fullTimeUser} | ${0}
    ${partTimeUser} | ${0}
    `.test(
    'Customer who has employment type of "$user.employmentStatus.label" should be offered $expected student card(s)',
    ({ user, expected }) => {
      const result = eligibility(user, availableCards)

      expect(
        result.filter(card => card.cardTitle === 'Student Life').length
      ).toBe(expected)
    }
  )

  each`
    user            | expected
    ${studentUser}  | ${1}
    ${fullTimeUser} | ${1}
    ${partTimeUser} | ${0}
  `.test(
    'Customer with salary of "$user.annualIncome" should be offered $expected Liquid Card(s)',
    ({ user, expected }) => {
      const result = eligibility(user, availableCards)

      expect(
        result.filter(card => card.cardTitle === 'Liquid Card').length
      ).toBe(expected)
    }
  )

  each`
    user            | expected
    ${studentUser}  | ${1}
    ${fullTimeUser} | ${1}
    ${partTimeUser} | ${1}
`.test(
    'Customer "$user.firstName $user.surname" should be offered $expected Anywhere Card(s)',
    ({ user, expected }) => {
      const result = eligibility(user, availableCards)

      expect(
        result.filter(card => card.cardTitle === 'Anywhere Card').length
      ).toBe(expected)
    }
  )
})
