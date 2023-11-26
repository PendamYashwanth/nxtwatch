// REACT-ICONS
import {SiYoutubegaming} from 'react-icons/si'
// COMPONENTS
import Header from '../Header'
import SideBar from '../Sidebar'
import SavedVideoItem from './SavedVideoItem'
import NoSavedVideos from './NoSavedVideos'
// CONTEXT
import NxtWatchAppContext from '../../context/NxtWatchAppContext'
// CSS-IN-JS
import {
  SectionContainer,
  BgContainer,
  ResponsiveContainer,
} from './styledComponents'
import Banner from '../Banners'

const SavedVideos = () => (
  <NxtWatchAppContext.Consumer>
    {value => {
      const {savedVideosList} = value
      const savedVideosCount = savedVideosList.length
      return (
        <div data-testid="savedVideos">
          <Header />
          <SectionContainer>
            <SideBar />
            <BgContainer>
              {savedVideosCount > 0 ? (
                <>
                  <Banner icon={<SiYoutubegaming />} section="Saved Videos" />
                  <ResponsiveContainer>
                    <ul>
                      {savedVideosList.map(eachItem => (
                        <SavedVideoItem
                          key={eachItem.id}
                          videoDetails={eachItem}
                        />
                      ))}
                    </ul>
                  </ResponsiveContainer>
                </>
              ) : (
                <NoSavedVideos />
              )}
            </BgContainer>
          </SectionContainer>
        </div>
      )
    }}
  </NxtWatchAppContext.Consumer>
)

export default SavedVideos
