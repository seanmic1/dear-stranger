'use client'

import { useTheme } from 'next-themes'


export default function ColorModeButton() {

  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }}>Toggle Theme</button>
  )
}
