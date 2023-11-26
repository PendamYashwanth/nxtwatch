import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
// THIRD-PARTY-PACKAGES
import {ThemeProvider} from 'styled-components'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
// CONTEXT
import NxtWatchAppContext from './context/NxtWatchAppContext'
// CSS
import './App.css'

const LightTheme = {
  colors: {
    colorDefault: '#000000',
    colorPrimary: '#475569',
    colorAccentDefault: '#ff061f',
    colorAccentPrimary: '#666666',
    colorConfirmation: '#00306e',
    bgDefault: '#f9f9f9',
    bgPrimary: '#ffffff',
    bgSecondary: '#f1f5f9',
    bgTertiary: '#f1f1f1',
    bgHome: '#f9f9f9',
    borderColor: ' #3b82f6',
  },
}

const DarkTheme = {
  colors: {
    colorDefault: '#ffffff',
    colorPrimary: '#94a3b8',
    colorSecondary: '',
    colorAccentDefault: '#f2081d',
    colorAccentPrimary: '#928f91',
    colorConfirmation: '#ffffff',
    bgDefault: '#0f0f0f',
    bgPrimary: '#212121',
    bgSecondary: '#383838',
    bgTertiary: '#181818',
    bgHome: ' #181818',
    borderColor: ' #ffffff',
  },
}

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: []}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onClickSaveVideo = videoDetailsData => {
    const {savedVideosList} = this.state
    const {id} = videoDetailsData
    const isVideoSaved = savedVideosList.some(videoItem => videoItem.id === id)
    if (isVideoSaved === false) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoDetailsData],
      }))
    }
  }

  render() {
    const {isDarkTheme, savedVideosList} = this.state
    const currentTheme = isDarkTheme ? DarkTheme : LightTheme
    return (
      <NxtWatchAppContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
          savedVideosList,
          onClickSaveVideo: this.onClickSaveVideo,
        }}
      >
        <ThemeProvider theme={currentTheme}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/video/:id"
              component={VideoItemDetails}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ThemeProvider>
      </NxtWatchAppContext.Provider>
    )
  }
}

export default App
