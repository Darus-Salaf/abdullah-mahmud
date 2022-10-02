import { createContext, useContext, useState } from 'react'

const AppContext = createContext()
export function AppWrapper({ children }) {
  const [size, setSize] = useState(10)

  return (
    <AppContext.Provider value={[size, setSize]}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
