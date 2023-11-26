import styled from 'styled-components'

export const BgContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.bgTertiary};
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
`
export const IconContainer = styled.div`
  height: 50px;
  width: 50px;
  font-size: 25px;
  border-radius: 25px;
  background-color: ${props => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Icon = styled.div`
  height: 50px;
  width: 50px;
  font-size: 25px;
  color: ${props => props.theme.colors.colorAccentDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SectionHeading = styled.h2`
  color: ${props => props.theme.colors.colorDefault};
  margin-bottom: 0px;
`
