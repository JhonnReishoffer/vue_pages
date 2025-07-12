import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark({
    selector: 'html',
    valueDark: 'dark',
    valueLight: 'light',
  })
  const toggleDark = useToggle(isDark)

  return { isDark, toggleDark }
}