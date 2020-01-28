import Text from 'components/atoms/text'
import styled from 'styled-components'
import media from 'tokens/deviceWidths'

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
  background: salmon;
  grid-area: body;
`

const Header = styled.header`
  background: tomato;
  grid-area: header;
`

const Footer = styled.footer`
  background: teal;
  grid-area: footer;
`

export default Master
