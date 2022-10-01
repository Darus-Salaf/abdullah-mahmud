import { createTheme, theme } from '@nextui-org/react'

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#efefef',
      text: '#413f3d',
      sidebar: '#202124'
    }
  }
})

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#202124',
      text: '#d2d3d7',
      sidebar: theme.colors.secondary
    }
  }
})
