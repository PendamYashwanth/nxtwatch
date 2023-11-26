import styled from 'styled-components'

export const GameItemContainer = styled.li`
  flex: 0 0 calc(33.33% - 20px);
  width: 100%;
  max-width: calc(33.33% - 20px);
  margin-bottom: 16px;
  @media screen and (max-width: 576px) {
    flex: 0 0 calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
`
export const GameThumbnail = styled.img`
  width: 100%;
`

export const GameDescriptionContainer = styled.div`
  padding: 5px;
`
export const GameTitle = styled.h2`
  color: ${props => props.theme.colors.colorDefault};
`

export const GameName = styled.h3`
  color: ${props => props.theme.colors.colorPrimary};
  margin-bottom: 3px;
`
