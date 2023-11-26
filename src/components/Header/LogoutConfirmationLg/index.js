import Popup from 'reactjs-popup'
// CSS-IN-JS
import {
  BgContainer,
  LogoutButtonLg,
  Title,
  ConfirmationButtonsContainer,
  CustomButton,
} from './styledComponents'

const LogoutConformationLg = props => {
  const {onClickLogout} = props

  const onLogout = () => {
    onClickLogout()
  }

  return (
    <Popup
      modal
      trigger={<LogoutButtonLg type="button">Logout</LogoutButtonLg>}
    >
      {close => (
        <BgContainer>
          <Title>Are you sure you want to logout?</Title>
          <ConfirmationButtonsContainer>
            <CustomButton type="button" onClick={() => close()} outline>
              Cancel
            </CustomButton>
            <CustomButton type="button" onClick={onLogout}>
              Confirm
            </CustomButton>
          </ConfirmationButtonsContainer>
        </BgContainer>
      )}
    </Popup>
  )
}

export default LogoutConformationLg
