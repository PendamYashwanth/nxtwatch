import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  flex: 0 0 calc(33.33% - 20px);
  width: 100%;
  max-width: calc(33.33% - 20px);
  margin-bottom: 16px;
  @media screen and (max-width: 767px) {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
  @media screen and (max-width: 575px) {
    flex: 0 0 calc(100%);
    max-width: 100%;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 5px 3px;
`

export const ChannelLogoContainer = styled.div`
  width: 15%;
`

export const ChannelLogo = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  width: 100%;
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
