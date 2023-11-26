// REACT-ICONS
import {SiYoutubegaming} from 'react-icons/si'
// COMPONENTS
import Header from '../Header'
import SideBar from '../Sidebar'
import GamingSection from './GamingSection'
// CSS-IN-JS
import {SectionContainer, BgContainer} from './styledComponents'
import Banner from '../Banners'

const Gaming = () => (
  <div data-testid="gaming">
    <Header />
    <SectionContainer>
      <SideBar />
      <BgContainer>
        <Banner icon={<SiYoutubegaming />} section="Gaming" />
        <GamingSection />
      </BgContainer>
    </SectionContainer>
  </div>
)

export default Gaming
