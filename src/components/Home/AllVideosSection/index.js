import {Component} from 'react'
// THIRD PARTY PACKAGES
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
// REACT-ICONS
import {FaSearch} from 'react-icons/fa'
// COMPONENTS
import VideoItem from '../VideoItem'
import FailureView from '../../FailureView'
import NoSearchResultsView from './NoSearchResultsView'
// CSS-IN-JS
import {
  VideoItemsContainer,
  ResponsiveContainer,
  LoadingContainer,
  SearchInputBgContainer,
  SearchInputContainer,
  Input,
  SearchIconContainer,
  SearchIcon,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class AllVideosSection extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoData: [],
    total: 0,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    }

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedTotalVideos = data.total
      const fetchedVideoData = data.videos
      const formattedData = fetchedVideoData.map(eachItem => ({
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoData: formattedData,
        total: fetchedTotalVideos,
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

  clearSearchFilters = () => {
    this.setState({searchInput: ''}, () => {
      this.getVideosData()
    })
  }

  renderSuccessView = () => {
    const {videoData, total} = this.state
    return total === 0 ? (
      <NoSearchResultsView onRetry={this.clearSearchFilters} />
    ) : (
      <ResponsiveContainer>
        <VideoItemsContainer>
          {videoData.map(eachVideo => (
            <VideoItem key={eachVideo.id} videoDetails={eachVideo} />
          ))}
        </VideoItemsContainer>
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

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getVideosData()
    }
  }

  onClickSearchIcon = () => {
    this.getVideosData()
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <SearchInputBgContainer>
          <SearchInputContainer>
            <Input
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearch}
              onKeyDown={this.onEnterSearch}
            />
            <SearchIconContainer>
              <SearchIcon
                type="button"
                onClick={this.onClickSearchIcon}
                data-testid="searchButton"
              >
                <FaSearch />
              </SearchIcon>
            </SearchIconContainer>
          </SearchInputContainer>
        </SearchInputBgContainer>
        {this.renderAllViews()}
      </>
    )
  }
}

export default AllVideosSection
