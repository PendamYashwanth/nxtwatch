import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  padding: 10px 10px;
  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`

export const VideoThumbnail = styled.img`
  width: 100%;
  min-width: 450px;
  max-width: 450px;
  @media screen and (max-width: 991px) {
    min-width: 320px;
    max-width: 320px;
  }
  @media screen and (max-width: 767px) {
    min-width: 250px;
    max-width: 250px;
  }
`
export const VideoDescriptionContainer = styled.div`
  padding: 5px 3px;
`

export const VideoTitle = styled.h2`
  color: ${props => props.theme.colors.colorDefault};
`

export const ChannelName = styled.h3`
  color: ${props => props.theme.colors.colorPrimary};
  margin-bottom: 3px;
`
export const OtherDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`

export const OtherDetails = styled.p`
  color: ${props => props.theme.colors.colorPrimary};
`
export const Icon = styled.div`
  height: 25px;
  width: 25px;
  font-size: 25px;
  color: ${props => props.theme.colors.colorPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
