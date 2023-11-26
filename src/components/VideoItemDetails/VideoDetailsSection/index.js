import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
// REACT-ICONS
import {BsDot} from 'react-icons/bs'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
// CONTEXT
import NxtWatchAppContext from '../../../context/NxtWatchAppContext'
// CSS-IN-JS
import {
  BgContainer,
  ResponsiveContainer,
  LoadingContainer,
  PlayerWrapper,
  VideoTitle,
  VideoDescriptionContainer,
  OtherDetailsContainer,
  OtherDetails,
  Icon,
  ChannelDetailsContainer,
  ChannelLogoContainer,
  ChannelLogo,
  ChannelName,
  VideoDescription,
  InteractionsIconContainer,
  InteractionIconContainer,
  InteractionIcon,
} from './styledComponents'
// CSS
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetailsSection extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetailsData: '',
    isLiked: false,
    isDisliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoData()
  }

  onCLickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onCLickDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  onClickSave = onClickSaveVideo => {
    const {videoDetailsData} = this.state
    this.setState(
      prevState => ({isSaved: !prevState.isSaved}),
      onClickSaveVideo(videoDetailsData),
    )
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
    const {match} = this.props
    const {params} = match
    const {id} = params

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const response = await fetch(videoItemDetailsApiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedVideoData = data.video_details
      const formattedData = {
        name: fetchedVideoData.channel.name,
        profileImageUrl: fetchedVideoData.channel.profile_image_url,
        subscriberCount: fetchedVideoData.channel.subscriber_count,
        description: fetchedVideoData.description,
        id: fetchedVideoData.id,
        publishedAt: fetchedVideoData.published_at,
        thumbnailUrl: fetchedVideoData.thumbnail_url,
        title: fetchedVideoData.title,
        videoUrl: fetchedVideoData.video_url,
        viewCount: fetchedVideoData.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetailsData: formattedData,
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
    const {videoDetailsData, isLiked, isDisliked, isSaved} = this.state
    const {
      name,
      profileImageUrl,
      subscriberCount,
      description,
      publishedAt,
      title,
      videoUrl,
      viewCount,
    } = videoDetailsData

    let publishedTime = formatDistanceToNow(new Date(publishedAt))
    publishedTime = publishedTime.split(' ')
    publishedTime = publishedTime.slice(1, 3)
    publishedTime = publishedTime.join(' ')

    return (
      <NxtWatchAppContext.Consumer>
        {value => {
          const {onClickSaveVideo} = value
          return (
            <ResponsiveContainer>
              <PlayerWrapper>
                <ReactPlayer
                  className="react-player"
                  url={videoUrl}
                  width="100%"
                  height="100%"
                />
              </PlayerWrapper>
              <div>
                <VideoTitle>{title}</VideoTitle>
                <VideoDescriptionContainer>
                  <OtherDetailsContainer>
                    <OtherDetails>{viewCount} views</OtherDetails>
                    <Icon>
                      <BsDot />
                    </Icon>
                    <OtherDetails>{publishedTime}</OtherDetails>
                  </OtherDetailsContainer>
                  <InteractionsIconContainer>
                    <InteractionIconContainer>
                      <InteractionIcon
                        type="button"
                        onClick={this.onCLickLike}
                        $active={isLiked}
                      >
                        <AiOutlineLike />
                      </InteractionIcon>
                      <OtherDetails>Like</OtherDetails>
                    </InteractionIconContainer>
                    <InteractionIconContainer>
                      <InteractionIcon
                        type="button"
                        onClick={this.onCLickDislike}
                        $active={isDisliked}
                      >
                        <AiOutlineDislike />
                      </InteractionIcon>
                      <OtherDetails>Dislike</OtherDetails>
                    </InteractionIconContainer>
                    <InteractionIconContainer>
                      <InteractionIcon
                        type="button"
                        onClick={() => {
                          this.onClickSave(onClickSaveVideo)
                        }}
                        $active={isSaved}
                      >
                        <MdPlaylistAdd />
                      </InteractionIcon>
                      <OtherDetails>Save</OtherDetails>
                    </InteractionIconContainer>
                  </InteractionsIconContainer>
                </VideoDescriptionContainer>
                <hr />
                <ChannelDetailsContainer>
                  <ChannelLogoContainer>
                    <ChannelLogo src={profileImageUrl} alt="profile" />
                  </ChannelLogoContainer>
                  <div className="pl">
                    <ChannelName>{name}</ChannelName>
                    <OtherDetails>{subscriberCount} subscribers</OtherDetails>
                    <VideoDescription>{description}</VideoDescription>
                  </div>
                </ChannelDetailsContainer>
              </div>
            </ResponsiveContainer>
          )
        }}
      </NxtWatchAppContext.Consumer>
    )
  }

  renderAllViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return <BgContainer>{this.renderAllViews()}</BgContainer>
  }
}

export default withRouter(VideoDetailsSection)
