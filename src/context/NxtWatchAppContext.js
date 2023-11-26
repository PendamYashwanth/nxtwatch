import React from 'react'

const NxtWatchAppContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
  savedVideosList: [],
  onClickSaveVideo: () => {},
})

export default NxtWatchAppContext
