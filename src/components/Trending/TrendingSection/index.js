import {Component} from 'react'
//  THIRD PARTY PACKAGES
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// COMPONENTS
import VideoItem from './VideoItem'
import FailureView from '../../FailureView'
// CSS-IN_JS
import {ResponsiveContainer, LoadingContainer} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingSection extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosData: ''}

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
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const response = await fetch(trendingVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedVideoData = data.videos
      const formattedData = fetchedVideoData.map(eachVideo => ({
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideosData: formattedData,
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
    const {trendingVideosData} = this.state
    return (
      <ResponsiveContainer>
        <ul>
          {trendingVideosData.map(eachVideo => (
            <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </ul>
      </ResponsiveContainer>
    )
  }

  onClickRetry = () => {
    this.getVideoData()
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
    return <>{this.renderAllViews()}</>
  }
}

export default TrendingSection
