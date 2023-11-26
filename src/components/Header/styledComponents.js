import styled from 'styled-components'

export const HeaderEl = styled.header`
  background-color: ${props => props.theme.colors.bgPrimary};
  color: ${props => props.theme.colors.colorDefault};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 2%;
  height: 10vh;
  transition: var(--bg-transition);
`

export const LogoContainer = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 100%;
`

export const HeaderRightLg = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HeaderRightSmall = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const User = styled.img`
  width: 30px;
  height: 30px;
`
export const ThemeButton = styled.button`
  background: transparent;
  outline: none !important;
  border: none;
  color: ${props => props.theme.colors.colorDefault};
  cursor: pointer;
`

export const LogOutButtonSm = styled.button`
  background: transparent;
  outline: none !important;
  border: none;
  color: ${props => props.theme.colors.colorDefault};
  cursor: pointer;
`
