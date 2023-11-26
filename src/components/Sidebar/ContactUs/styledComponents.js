import styled from 'styled-components'

export const BgContainer = styled.div`
  padding: 0 10px;
  margin-bottom: 12px;
`
export const Title = styled.h2`
  color: ${props => props.theme.colors.colorDefault};
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 15px;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.colorPrimary};
`
