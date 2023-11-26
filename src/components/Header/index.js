import {withRouter} from 'react-router-dom'
// THIRD PARTY PACKAGES
import Cookies from 'js-cookie'
// REACT-ICONS
import {MdOutlineWbSunny} from 'react-icons/md'
import {FaMoon} from 'react-icons/fa'
// COMPONENTS
import PopupMenu from './PopupMenu'
import LogoutConformation from './LogoutConformation'
import LogoutConformationLg from './LogoutConfirmationLg'
// CONTEXT
import NxtWatchAppContext from '../../context/NxtWatchAppContext'
// CSS-IN-JS
import {Icon} from '../../styledComponents'
import {
  HeaderEl,
  LogoContainer,
  Logo,
  HeaderRightLg,
  HeaderRightSmall,
  User,
  ThemeButton,
} from './styledComponents'
// ASSETS
const logoLight =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const logoDark =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = props => (
  <NxtWatchAppContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const websiteLogo = isDarkTheme ? logoDark : logoLight
      const themeIcon = isDarkTheme ? <MdOutlineWbSunny /> : <FaMoon />

      /* TOGGLE THEME */
      const onClickThemeIcon = () => {
        toggleTheme()
      }
      /* LOGOUT */
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const renderHeaderRightSmallDev = () => (
        <HeaderRightSmall>
          <ThemeButton
            type="button"
            onClick={onClickThemeIcon}
            data-testid="theme"
          >
            <Icon>{themeIcon}</Icon>
          </ThemeButton>
          <PopupMenu />
          <LogoutConformation onClickLogout={onClickLogout} />
        </HeaderRightSmall>
      )
      const renderHeaderRightLargeDev = () => (
        <HeaderRightLg>
          <ThemeButton
            type="button"
            onClick={onClickThemeIcon}
            data-testid="theme"
          >
            <Icon>{themeIcon}</Icon>
          </ThemeButton>
          <User
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <LogoutConformationLg onClickLogout={onClickLogout} />
        </HeaderRightLg>
      )
      return (
        <HeaderEl>
          <LogoContainer>
            <Logo src={websiteLogo} alt="website logo" />
          </LogoContainer>
          <>
            {renderHeaderRightLargeDev()}
            {renderHeaderRightSmallDev()}
          </>
        </HeaderEl>
      )
    }}
  </NxtWatchAppContext.Consumer>
)

export default withRouter(Header)
