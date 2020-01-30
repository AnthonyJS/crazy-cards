import users from './users'
import availableCards from '../availableCards'
import eligibility from '../eligibility'

describe('Card eligibility', () => {
  test('Only students should be offered Student Life card', () => {
    const result = users.map(user => {
      return {
        user,
        eligibleCards: eligibility(user, availableCards)
      }
    })

    expect(
      result
        .filter(res => res.user.firstName == 'Elizabeth')
        .eligibleCards.filter(r => r.title == 'Student Life').length,
      to.be(1)
    )
  })
  test('Anywhere Card should be offered to all applicants', () => {})
  test('Liquid Card should only be offered to applicants earning over minimum salary specified', () => {})
})
