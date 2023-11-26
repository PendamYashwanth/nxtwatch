import Popup from 'reactjs-popup'
// REACT-ICONS
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
// COMPONENTS
import Navbar from '../../Sidebar/Navbar'
// CSS-IN-JS
import {Icon} from '../../../styledComponents'
import {
  MenuButton,
  BgContainer,
  CloseIconContainer,
  CloseIcon,
  NavbarBgContainer,
} from './styledComponents'

const PopupMenu = () => (
  <Popup
    modal
    trigger={
      <MenuButton>
        <Icon>
          <GiHamburgerMenu />
        </Icon>
      </MenuButton>
    }
  >
    {close => (
      <BgContainer>
        <CloseIconContainer>
          <CloseIcon type="button" onClick={() => close()}>
            <AiOutlineClose />
          </CloseIcon>
        </CloseIconContainer>
        <NavbarBgContainer>
          <Navbar />
        </NavbarBgContainer>
      </BgContainer>
    )}
  </Popup>
)

export default PopupMenu
