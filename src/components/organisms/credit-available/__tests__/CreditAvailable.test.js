import { calculateAvailableCreditForUser } from '../CreditAvailable'
import cardData from 'constants/cardData'
import each from 'jest-each'

describe('Credit available', () => {
  each`
    cardIds      | expected
    ${[1]}       | ${1200}
    ${[1, 2]}    | ${1500}
    ${[1, 2, 3]} | ${4500}

  `.test(
    'Customers offered $cardIds.length cards should have £ $expected available credit',
    ({ cardIds, expected }) => {
      const result = calculateAvailableCreditForUser(cardData, cardIds)

      expect(result).toBe(expected)
    }
  )
})
