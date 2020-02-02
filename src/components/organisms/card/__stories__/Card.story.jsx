import React from 'react'
import Card from '../Card'

export default { title: 'Card' }

export const unselectedCard = () => (
  <>
    <Card
      cardTitle="Student Life"
      apr={18.9}
      balanceTransferOfferDurationMonths={0}
      purchaseOfferDurationMonths={6}
      creditAvailable={1200}
    />
  </>
)

export const selectedCard = () => (
  <>
    <Card
      cardTitle="Student Life"
      apr={18.9}
      balanceTransferOfferDurationMonths={0}
      purchaseOfferDurationMonths={6}
      creditAvailable={1200}
      selected
    />
  </>
)
