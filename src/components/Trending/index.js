// REACT-ICONS
import {BsFire} from 'react-icons/bs'
// COMPONENTS
import Header from '../Header'
import SideBar from '../Sidebar'
import TrendingSection from './TrendingSection'
// CSS-IN-JS
import {SectionContainer, BgContainer} from './styledComponents'
import Banner from '../Banners'

const Trending = () => (
  <div data-testid="trending">
    <Header />
    <SectionContainer>
      <SideBar />
      <BgContainer>
        <Banner icon={<BsFire />} section="Trending" />
        <TrendingSection />
      </BgContainer>
    </SectionContainer>
  </div>
)

export default Trending
