import {Component} from 'react'
// THIRD PARTY PACKAGES
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// COMPONENTS
import GameItem from './GameItem'
import FailureView from '../../FailureView'
// CSS-IN-JS
import {
  GameItemsContainer,
  ResponsiveContainer,
  LoadingContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingSection extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamesData: ''}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'

    const response = await fetch(gamingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedVideoData = data.videos
      const formattedData = fetchedVideoData.map(eachVideo => ({
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamesData: formattedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="grey" height="35" width="35" />
      </div>
    </LoadingContainer>
  )

  renderSuccessView = () => {
    const {gamesData} = this.state
    return (
      <ResponsiveContainer>
        <GameItemsContainer>
          {gamesData.map(eachItem => (
            <GameItem key={eachItem.id} gameDetails={eachItem} />
          ))}
        </GameItemsContainer>
      </ResponsiveContainer>
    )
  }

  onClickRetry = () => {
    this.getVideosData()
  }

  renderFailureView = () => <FailureView onRetry={this.onClickRetry} />

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderAllViews()}</div>
  }
}

export default GamingSection
