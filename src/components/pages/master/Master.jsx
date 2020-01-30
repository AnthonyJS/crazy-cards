import Text from 'components/atoms/text'
import styled from 'styled-components'
import media from 'constants/deviceWidths'

const Master = ({ children }) => (
  <Layout>
    <Header>
      <Text as="h1" variant="heading">
        Crazy Cards
      </Text>
    </Header>
    <Content>{children}</Content>
    <Footer>footer</Footer>
  </Layout>
)

const Layout = styled.div`
  display: grid;
  min-height: 100vh;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  grid-template-columns: 20px 1fr 20px;

  ${media.m`
    grid-template-columns: 1fr 700px 1fr;
  `}

  ${media.l`
    grid-template-columns: 1fr 900px 1fr;
  `}

  grid-template-areas:
    'header header header'
    '. body .'
    'footer footer footer';
`

const Content = styled.div`
  grid-area: body;
`

const Header = styled.header`
  grid-area: header;
`

const Footer = styled.footer`
  grid-area: footer;
`

export default Master
