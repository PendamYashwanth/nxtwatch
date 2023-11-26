import Popup from 'reactjs-popup'
// REACT-ICONS
import {MdOutlineLogout} from 'react-icons/md'
// CSS-IN-JS
import {Icon} from '../../../styledComponents'
import {
  BgContainer,
  LogoutButtonSm,
  Title,
  ConfirmationButtonsContainer,
  CustomButton,
} from './styledComponents'

const LogoutConformation = props => {
  const {onClickLogout} = props

  const onLogout = () => {
    onClickLogout()
  }

  return (
    <Popup
      modal
      trigger={
        <LogoutButtonSm type="button">
          <Icon>
            <MdOutlineLogout />
          </Icon>
        </LogoutButtonSm>
      }
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

export default LogoutConformation
