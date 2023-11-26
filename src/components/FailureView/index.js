import NxtWatchAppContext from '../../context/NxtWatchAppContext'
// CSS-IN-JS
import {
  BgContainer,
  Image,
  Title,
  Description,
  Button,
} from './styledComponents'
// ASSETS
const failureImgLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const failureImgDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <NxtWatchAppContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureViewImg = isDarkTheme ? failureImgLight : failureImgDark
        return (
          <BgContainer>
            <Image src={failureViewImg} alt="failure view" />
            <Title>Oops! Something Went Wrong</Title>
            <Description>
              We are having some trouble to complete your request. <br />
              Please try again.
            </Description>
            <Button type="button" onClick={onClickRetry}>
              Retry
            </Button>
          </BgContainer>
        )
      }}
    </NxtWatchAppContext.Consumer>
  )
}

export default FailureView
