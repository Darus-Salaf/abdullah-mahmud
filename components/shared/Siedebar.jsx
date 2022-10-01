import { useTheme } from '@nextui-org/react'

export default function Siedebar() {
  const { isDark, theme } = useTheme()
  return (
    <div
      className='pt-20 hidden sm:block fixed h-full left-0 top-0 w-32 text-white'
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
