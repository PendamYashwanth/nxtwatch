// CONTEXT
import NxtWatchAppContext from '../../../context/NxtWatchAppContext'
// CSS-IN-JS
import {BgContainer, Image, Title, Description} from './styledComponents'
// ASSETS
const notFoundLightImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
const notFoundDarkImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

const NoSavedVideos = () => (
  <NxtWatchAppContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundImg = isDarkTheme ? notFoundDarkImg : notFoundLightImg
      return (
        <BgContainer>
          <Image src={notFoundImg} alt="not found" />
          <Title>Page Not Found</Title>
          <Description>
            We are sorry, the page you requested could not be found.
          </Description>
        </BgContainer>
      )
    }}
  </NxtWatchAppContext.Consumer>
)

export default NoSavedVideos
