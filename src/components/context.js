import React, { useContext, useState } from "react"

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)

  const OnToggle = () => {
    return setShowMenu(true)
  }

  const OffToggle = () => {
    return setShowMenu(false)
  }

  return (
    <AppContext.Provider value={{ showMenu, OnToggle, OffToggle }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGlobalContext }
