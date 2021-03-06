import EmploymentStatus from 'constants/employmentStatus'

const cardData = [
  {
    id: 1,
    cardTitle: 'Student Life',
    apr: 18.9,
    balanceTransferOfferDurationMonths: 0,
    purchaseOfferDurationMonths: 6,
    creditAvailable: 1200,
    eligible: [EmploymentStatus.STUDENT]
  },
  {
    id: 2,
    cardTitle: 'Anywhere Card',
    apr: 33.9,
    balanceTransferOfferDurationMonths: 0,
    purchaseOfferDurationMonths: 0,
    creditAvailable: 300
  },
  {
    id: 3,
    cardTitle: 'Liquid Card',
    apr: 33.9,
    balanceTransferOfferDurationMonths: 12,
    purchaseOfferDurationMonths: 6,
    creditAvailable: 3000,
    minimumSalary: 16000
  }
]

export default cardData
