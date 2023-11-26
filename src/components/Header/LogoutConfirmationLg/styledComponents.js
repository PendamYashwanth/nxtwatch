import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: ${props => props.theme.colors.bgDefault};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 12px;
`

export const LogoutButtonLg = styled.button`
  padding: 8px 16px;
  background: transparent;
  outline: none !important;
  border: 2px solid ${props => props.theme.colors.borderColor};
  border-radius: 2px;
  font-weight: 500;
  color: ${props => props.theme.colors.borderColor};
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

/* ---------------------- POPUP ----------------------- */

export const Title = styled.h2`
  color: ${props => props.theme.colors.colorConfirmation};
`

export const ConfirmationButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
`

export const CustomButton = styled.button`
  padding: 8px 16px;
  height: 40px;
  width: max-content;
  outline: none !important;
  font-size: 14px;
  color: ${props =>
    props.outline ? props.theme.colors.colorDefault : '#ffffff'};
  border: ${props => (props.outline ? '1px solid' : 'None')};
  border-color: ${props =>
    props.outline ? props.theme.colors.colorDefault : 'None'};
  border-radius: 4px;
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  cursor: pointer;
`
