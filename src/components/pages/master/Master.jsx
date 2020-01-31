import { Text, Alignment } from 'components/atoms'
import styled from 'styled-components'
import media from 'constants/deviceWidths'
import HeaderText from './headerText'

const Master = ({ children }) => (
  <Layout>
    <Header>
      <Alignment justifyContent="center" py={4}>
        <Text variant={{ s: 'fixedWidth', m: 'fixedWidthBig' }}>
          <pre>
            <code>{HeaderText}</code>
          </pre>
        </Text>
      </Alignment>
    </Header>
    <Content>{children}</Content>
    <Footer>Made by Anthony Simpson 2020</Footer>
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
    '. header .'
    '. body .'
    '. footer .';
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
