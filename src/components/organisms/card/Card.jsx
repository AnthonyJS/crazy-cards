import styled from 'styled-components'
import Alignment from 'components/atoms/alignment'
import Text from 'components/atoms/text'
import PropTypes from 'prop-types'

const Card = ({
  cardTitle,
  apr,
  balanceTransferOfferDurationMonths,
  purchaseOfferDurationMonths,
  creditAvailable
}) => (
  <CardStyled>
    <Alignment justifyContent="center">
      <Text as="h3" variant="subHeading">
        {cardTitle}
      </Text>
    </Alignment>
    <div>
      <Text>Apr: &nbsp;</Text>
      <Text variant="bodyBold">{apr}%</Text>
    </div>
    <div>
      <Text>Balance Transfer Offer Duration: &nbsp;</Text>
      <Text variant="bodyBold">
        {balanceTransferOfferDurationMonths} Months
      </Text>
    </div>
    <div>
      <Text>Purchase Offer Duration:&nbsp;</Text>
      <Text variant="bodyBold">{purchaseOfferDurationMonths} Months</Text>
    </div>
    <div>
      <Text>Credit Available: &nbsp;</Text>
      <Text variant="bodyBold">£{creditAvailable}</Text>
    </div>
  </CardStyled>
)

Card.propTypes = {
  cardTitle: PropTypes.string,
  apr: PropTypes.number,
  balanceTransferOfferDurationMonths: PropTypes.number,
  purchaseOfferDurationMonths: PropTypes.number,
  creditAvailable: PropTypes.number
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  /* TODO: Make these responsive */
  width: 350px;
  height: 225px;
  border-radius: 25px;
  padding: 20px;
  margin: 20px;
  /* TODO: Use tokens for colors */
  border: 1px solid #aaa;
  box-shadow: 10px 10px 16px #888888;
`

export default Card
