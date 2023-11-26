// CSS-IN-JS
import {BgContainer, Image, Title, Description} from './styledComponents'
// ASSETS
const NoSavedVideosImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png'

const NoSavedVideos = () => (
  <BgContainer>
    <Image src={NoSavedVideosImg} alt="no saved videos" />
    <Title>No saved videos found</Title>
    <Description>You can save your videos while watching them</Description>
  </BgContainer>
)

export default NoSavedVideos
