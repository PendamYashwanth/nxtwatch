// CSS-IN-JS
import {
  BgContainer,
  Image,
  Title,
  Description,
  Button,
} from './styledComponents'
// ASSETS
const NoSearchResultsViewImg =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

const NoSearchResultsView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <BgContainer>
      <Image src={NoSearchResultsViewImg} alt="no videos" />
      <Title>No Search results found</Title>
      <Description>Try different key words or remove search filter</Description>
      <Button type="button" onClick={onClickRetry}>
        Retry
      </Button>
    </BgContainer>
  )
}

export default NoSearchResultsView
