import { fullTimeUser, partTimeUser, studentUser } from './test-data/users'
import cardData from 'constants/cardData'
import eligibility from '../eligibility'
import each from 'jest-each'

describe('Card eligibility', () => {
  each`
    user            | expected
    ${studentUser}  | ${1}
    ${fullTimeUser} | ${0}
    ${partTimeUser} | ${0}
  `.test(
    'Customer who has employment type of "$user.employmentStatus" should be offered $expected student card(s)',
    ({ user, expected }) => {
      const result = eligibility(user, cardData)

      expect(
        result.filter(card => card.cardTitle === 'Student Life')
      ).toHaveLength(expected)
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
      const result = eligibility(user, cardData)

      expect(
        result.filter(card => card.cardTitle === 'Liquid Card')
      ).toHaveLength(expected)
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
      const result = eligibility(user, cardData)

      expect(
        result.filter(card => card.cardTitle === 'Anywhere Card')
      ).toHaveLength(expected)
    }
  )
})
