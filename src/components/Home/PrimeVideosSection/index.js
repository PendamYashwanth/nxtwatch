// REACT ICONS
import {AiOutlineClose} from 'react-icons/ai'
// COMPONENTS
import {
  BgContainer,
  ResponsiveContainer,
  LogoContainer,
  Logo,
  Title,
  Button,
  CloseIcon,
} from './styledComponents'
// ASSETS
const logoLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const PrimeVideosSection = props => {
  const {closePrimeVideos} = props
  const onCLickCloseIcon = () => {
    closePrimeVideos()
  }

  return (
    <BgContainer>
      <ResponsiveContainer>
        <div>
          <LogoContainer>
            <Logo src={logoLight} alt="nxt watch logo" />
          </LogoContainer>
          <Title>Buy Nxt Watch Premium prepaid plans with UPI</Title>
          <Button>GET IT NOW</Button>
        </div>
        <CloseIcon type="button" onClick={onCLickCloseIcon} data-testid="close">
          <AiOutlineClose />
        </CloseIcon>
      </ResponsiveContainer>
    </BgContainer>
  )
}

export default PrimeVideosSection
