import AsyncStorage from '@react-native-async-storage/async-storage'
import { Dispatch, SetStateAction } from 'react'

async function verificationTheme(dark: boolean, theme: 'light' | 'dark', setTheme: Dispatch<SetStateAction<'light' | 'dark'>>) {
    if (dark && theme === 'light') {
        await AsyncStorage.setItem('theme', 'dark')
        setTheme('dark')
    } else if (!dark && theme === 'dark') {
        await AsyncStorage.setItem('theme', 'light')
        setTheme('light')
    }
}

export default verificationTheme