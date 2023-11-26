import {Component} from 'react'
// COMPONENTS
import AllVideosSection from '../AllVideosSection'
import PrimeVideosSection from '../PrimeVideosSection'

class VideosSection extends Component {
  state = {displayPrimeVideos: true}

  closePrimeVideos = () => {
    this.setState({displayPrimeVideos: false})
  }

  render() {
    const {displayPrimeVideos} = this.state
    return (
      <>
        {displayPrimeVideos && (
          <PrimeVideosSection closePrimeVideos={this.closePrimeVideos} />
        )}

        <AllVideosSection />
      </>
    )
  }
}

export default VideosSection
