// REACT-ICONS
import {AiFillHome} from 'react-icons/ai'
import {BsFire} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
// COMPONENTS
import NavItem from './NavItem'

const navItemsList = [
  {
    id: '/',
    icon: <AiFillHome />,
    displayText: 'Home',
  },
  {
    id: '/trending',
    icon: <BsFire />,
    displayText: 'Trending',
  },
  {
    id: '/gaming',
    icon: <SiYoutubegaming />,
    displayText: 'Gaming',
  },
  {
    id: '/saved-videos',
    icon: <MdPlaylistAdd />,
    displayText: 'Saved videos',
  },
]

const Navbar = () => (
  <nav>
    <ul>
      {navItemsList.map(eachItem => (
        <NavItem key={eachItem.id} navDetails={eachItem} />
      ))}
    </ul>
  </nav>
)

export default Navbar
