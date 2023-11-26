// COMPONENTS
import Header from '../Header'
import SideBar from '../Sidebar'
import VideosSection from './VideosSection'
// CSS-IN-JS
import {SectionContainer, BgContainer} from './styledComponents'

const Home = () => (
  <div data-testid="home">
    <Header />
    <SectionContainer>
      <SideBar />
      <BgContainer>
        <VideosSection />
      </BgContainer>
    </SectionContainer>
  </div>
)

export default Home
