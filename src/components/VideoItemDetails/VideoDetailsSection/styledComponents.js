import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 100%;
  overflow: auto;
`

export const ResponsiveContainer = styled.div`
  padding: 25px;
  max-width: 1040px;
  margin: 0 auto;
`
export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  margin-bottom: 12px;
`
export const VideoTitle = styled.h2`
  color: ${props => props.theme.colors.colorDefault};
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
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

export const ChannelDetailsContainer = styled.div`
  display: flex;
`
export const ChannelLogoContainer = styled.div`
  width: 15%;
`

export const ChannelLogo = styled.img`
  width: 100%;
  max-width: 90px;
`
export const ChannelName = styled.h3`
  color: ${props => props.theme.colors.colorPrimary};
  margin-bottom: 3px;
`
export const VideoDescription = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.colorDefault};
`

export const InteractionsIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`
export const InteractionIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const InteractionIcon = styled.button`
  height: 25px;
  width: 25px;
  font-size: 25px;
  background-color: transparent;
  border: none;
  outline: none !important;
  color: ${props => (props.$active ? '#2563eb' : '#64748b')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
