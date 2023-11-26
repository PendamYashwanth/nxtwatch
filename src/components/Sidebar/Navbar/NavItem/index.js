// CSS-IN-JS
import {CustomLink, NavIcon, NavName} from './styledComponents'

const NavItem = props => {
  const {navDetails} = props
  const {id, icon, displayText} = navDetails
  const activePath = window.location.pathname
  return (
    <li>
      <CustomLink to={id} $isActive={activePath === id}>
        <NavIcon $isActive={activePath === id}>{icon}</NavIcon>
        <NavName>{displayText}</NavName>
      </CustomLink>
    </li>
  )
}

export default NavItem
