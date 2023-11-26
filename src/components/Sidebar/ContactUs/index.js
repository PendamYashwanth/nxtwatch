// CSS-IN-JS
import {
  BgContainer,
  Title,
  Description,
  IconsContainer,
  Icon,
} from './styledComponents'
// ASSETS
const facebookLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
const twitterLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'
const linkedInLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'

const ContactUs = () => (
  <BgContainer>
    <Title>Contact us</Title>
    <IconsContainer>
      <Icon src={facebookLogo} alt="facebook logo" />
      <Icon src={twitterLogo} alt="twitter logo" />
      <Icon src={linkedInLogo} alt="linked in logo" />
    </IconsContainer>
    <Description>
      Enjoy! Now to see your channels and recommendations!
    </Description>
  </BgContainer>
)

export default ContactUs
