import styled from 'styled-components'

export const MenuButton = styled.button`
  background: transparent;
  outline: none !important;
  border: none;
  color: ${props => props.theme.colors.colorDefault};
  cursor: pointer;
`

export const BgContainer = styled.div`
  background-color: ${props => props.theme.colors.bgDefault};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 25px;
  display: flex;
  flex-direction: column;
`

export const CloseIconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const CloseIcon = styled.button`
  height: 25px;
  width: 25px;
  font-size: 25px;
  color: ${props => props.theme.colors.colorDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const NavbarBgContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
