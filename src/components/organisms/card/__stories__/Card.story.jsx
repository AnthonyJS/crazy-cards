import React from 'react'
import Card from '../Card'

export default { title: 'Card' }

export const withCard = () => (
  <Card
    cardTitle="Student Life"
    apr={18.9}
    balanceTransferOfferDuration={0}
    purchaseOfferDuration={6}
    credit={1200}
  />
)
