import {Link} from 'react-router-dom'
// THIRD PARTY PACKAGES
import {formatDistanceToNow} from 'date-fns'
// REACT-ICONS
import {BsDot} from 'react-icons/bs'
// CSS-IN-JS
import {
  VideoItemContainer,
  VideoThumbnail,
  VideoDescriptionContainer,
  ChannelLogoContainer,
  ChannelLogo,
  VideoDetailsContainer,
  VideoTitle,
  ChannelName,
  OtherDetailsContainer,
  Icon,
  OtherDetails,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    name,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

  let publishedTime = formatDistanceToNow(new Date(publishedAt))
  publishedTime = publishedTime.split(' ')
  publishedTime = publishedTime.slice(1, 3)
  publishedTime = publishedTime.join(' ')

  return (
    <VideoItemContainer>
      <Link to={`video/${id}`}>
        <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
      </Link>
      <VideoDescriptionContainer>
        <ChannelLogoContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
        </ChannelLogoContainer>
        <VideoDetailsContainer>
          <VideoTitle>{title}</VideoTitle>
          <ChannelName>{name}</ChannelName>
          <OtherDetailsContainer>
            <OtherDetails>{viewCount} Views</OtherDetails>
            <Icon>
              <BsDot />
            </Icon>
            <OtherDetails>{publishedTime} ago</OtherDetails>
          </OtherDetailsContainer>
        </VideoDetailsContainer>
      </VideoDescriptionContainer>
    </VideoItemContainer>
  )
}

export default VideoItem
