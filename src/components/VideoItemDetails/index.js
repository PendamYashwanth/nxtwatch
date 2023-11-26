import {Component} from 'react'
// COMPONENTS
import Header from '../Header'
import SideBar from '../Sidebar'
import VideoDetailsSection from './VideoDetailsSection'
// CSS-IN-JS
import {SectionContainer} from './styledComponents'

class VideoItemDetails extends Component {
  render() {
    return (
      <div data-testid="videoItemDetails">
        <Header />
        <SectionContainer>
          <SideBar />
          <VideoDetailsSection />
        </SectionContainer>
      </div>
    )
  }
}

export default VideoItemDetails
