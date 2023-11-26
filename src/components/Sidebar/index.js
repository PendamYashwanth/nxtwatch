// COMPONENTS
import Navbar from './Navbar'
import ContactUs from './ContactUs'
// CSS-IN-JS
import {BgContainer} from './styledComponents'

const SideBar = () => (
  <BgContainer>
    <Navbar />
    <ContactUs />
  </BgContainer>
)

export default SideBar
