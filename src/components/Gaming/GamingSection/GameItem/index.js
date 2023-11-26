import {
  GameItemContainer,
  GameThumbnail,
  GameDescriptionContainer,
  GameTitle,
  GameName,
} from './styledComponents'

const GameItem = props => {
  const {gameDetails} = props
  const {thumbnailUrl, title, viewCount} = gameDetails
  return (
    <GameItemContainer>
      <GameThumbnail src={thumbnailUrl} alt="thu" />
      <GameDescriptionContainer>
        <GameTitle>{title}</GameTitle>
        <GameName>{viewCount} Watching Worldwide</GameName>
      </GameDescriptionContainer>
    </GameItemContainer>
  )
}

export default GameItem
