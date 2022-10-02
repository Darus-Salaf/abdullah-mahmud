import { useTheme } from '@nextui-org/react'

export default function Siedebar() {
  const { isDark, theme } = useTheme()
  return (
    <div
      className='pt-20 hidden md:block fixed h-full left-0 top-0 w-40 text-white'
      style={{
        backgroundColor: isDark
          ? theme.colors.secondary.value
          : theme.colors.secondary.value
      }}
    >
      this is sidebar
    </div>
  )
}
