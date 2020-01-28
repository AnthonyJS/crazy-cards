import styled from 'styled-components'
import Alignment from 'components/atoms/alignment'
import Text from 'components/atoms/text'
import PropTypes from 'prop-types'

const Card = ({
  cardTitle,
  apr,
  balanceTransferOfferDurationMonths,
  purchaseOfferDurationMonths,
  creditAvailable,
  selected,
  onClick
}) => (
  <CardStyled selected={selected} onClick={onClick}>
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
  height: 200px;
  border-radius: 7px;
  padding: 20px;
  color: white;
  margin: 30px;
  cursor: pointer;
  /* TODO: Use tokens for colors */
  box-shadow: 10px 10px 16px #888888;
  opacity: 0.7;
  background: linear-gradient(45deg, #2600c3, #e7005c);
  transition: opacity 0.5s, transform 0.25s;
  ${({ selected }) => selected && 'transform: scale(1.1)'};

  & :hover {
    opacity: 1;
  }
`

export default Card
