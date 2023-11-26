import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavIcon = styled.div`
  height: 25px;
  width: 25px;
  font-size: 25px;
  color: ${props =>
    props.$isActive
      ? props.theme.colors.colorAccentDefault
      : props.theme.colors.colorAccentPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NavName = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.colorDefault};
`
export const CustomLink = styled(Link)`
  text-decoration: none;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${props =>
    props.$isActive ? props.theme.colors.bgSecondary : 'transparent'};
  &:hover {
    background-color: ${props => props.theme.colors.bgSecondary};
    ${NavIcon} {
      color: ${props => props.theme.colors.colorAccentDefault};
    }
  }
  @media screen and (max-width: 991px) {
    gap: 8px;
  }
`
