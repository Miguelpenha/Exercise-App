import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'

async function themeVeri(setTheme: Dispatch<SetStateAction<'light' | 'dark'>>) {
    try {
      if (await AsyncStorage.getItem('theme') === null) {
        if (Appearance.getColorScheme() === 'light') {
          await AsyncStorage.setItem('theme', 'light')
          setTheme('light')
        } else {
          await AsyncStorage.setItem('theme', 'dark')
          setTheme('dark')
        }
      } else {
        if (await AsyncStorage.getItem('theme') === 'light') {
          setTheme('light')
        } else {
          setTheme('dark')
        }
      }
    } catch {

    }
}

export default themeVeri