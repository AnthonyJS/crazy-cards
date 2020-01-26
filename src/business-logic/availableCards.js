import EmploymentStatus from 'tokens/employment-status'

const availableCards = [
  {
    title: 'Student Life',
    apr: 18.9,
    balanceTransferOfferDurationMonths: 0,
    purchaseOfferDurationMonths: 6,
    // currency: currency.GBP,
    creditAvailable: 1200,
    eligible: [EmploymentStatus.STUDENT]
  },
  {
    title: 'Anywhere Card',
    apr: 33.9,
    balanceTransferOfferDurationMonths: 0,
    purchaseOfferDurationMonths: 0,
    // currency: currency.GBP,
    creditAvailable: 300
  },
  {
    title: 'Liquid Card',
    apr: 33.9,
    balanceTransferOfferDurationMonths: 12,
    purchaseOfferDurationMonths: 6,
    // currency: currency.GBP,
    creditAvailable: 300,
    minimumSalary: 16000
  }
]

export default availableCards
