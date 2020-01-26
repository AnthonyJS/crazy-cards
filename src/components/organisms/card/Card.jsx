import styled from 'styled-components'
import Alignment from 'components/atoms/alignment'
import Text from 'components/atoms/text'
import PropTypes from 'prop-types'

const Card = ({
  cardTitle,
  apr,
  balanceTransferOfferDuration,
  purchaseOfferDuration,
  credit
}) => (
  <CardStyled>
    <Alignment justifyContent="center">
      <Text as="h3" variant="heading">
        {cardTitle}
      </Text>
    </Alignment>
    <div>
      <Text>Apr: &nbsp;</Text>
      <Text variant="bodyBold">{apr}%</Text>
    </div>
    <div>
      <Text>Balance Transfer Offer Duration: &nbsp;</Text>
      <Text variant="bodyBold">{balanceTransferOfferDuration} Months</Text>
    </div>
    <div>
      <Text>Purchase Offer Duration:&nbsp;</Text>
      <Text variant="bodyBold">{purchaseOfferDuration} Months</Text>
    </div>
    <div>
      <Text>Credit Available: &nbsp;</Text>
      <Text variant="bodyBold">£{credit}</Text>
    </div>
  </CardStyled>
)

Card.propTypes = {
  cardTitle: PropTypes.string,
  apr: PropTypes.number,
  balanceTransferOfferDuration: PropTypes.number,
  purchaseOfferDuration: PropTypes.number,
  credit: PropTypes.number
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* TODO: Make these responsive */
  width: 350px;
  height: 200px;
  border-radius: 25px;
  padding: 20px;
  /* TODO: Use tokens for colors */
  border: 1px solid #aaa;
  box-shadow: 10px 10px 16px #888888;
`

export default Card
