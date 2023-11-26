// COMPONENTS
import Header from '../Header'
import SideBar from '../Sidebar'
import NotFoundSection from './NotFoundSection'
// CSS-IN-JS
import {SectionContainer, BgContainer} from './styledComponents'

const NotFound = () => (
  <div>
    <Header />
    <SectionContainer>
      <SideBar />
      <BgContainer>
        <NotFoundSection />
      </BgContainer>
    </SectionContainer>
  </div>
)

export default NotFound
