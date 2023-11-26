//  THIRD PARTY PACKAGES
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
// REACT-ICONS
import {BsDot} from 'react-icons/bs'

import {
  VideoItemContainer,
  VideoThumbnail,
  VideoDescriptionContainer,
  VideoTitle,
  ChannelName,
  OtherDetailsContainer,
  OtherDetails,
  Icon,
} from './styledComponents'

const VideoItem = props => {
  const {videoDetails} = props
  const {id, title, name, thumbnailUrl, viewCount, publishedAt} = videoDetails

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
        <VideoTitle>{title}</VideoTitle>
        <ChannelName>{name}</ChannelName>
        <OtherDetailsContainer>
          <OtherDetails>{viewCount} views</OtherDetails>
          <Icon>
            <BsDot />
          </Icon>
          <OtherDetails>{publishedTime} ago</OtherDetails>
        </OtherDetailsContainer>
      </VideoDescriptionContainer>
    </VideoItemContainer>
  )
}

export default VideoItem
