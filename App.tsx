import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Appearance } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Inavigation } from './types'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Login from './pages/Login'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Exercises from './pages/Exercises'
import AppLoading from 'expo-app-loading'
import updateApp from './utils/updateApp'

function App() {
  const [pronto, setPronto] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | null | undefined>(Appearance.getColorScheme())
  const [name, setName] = useState('')
  const { Navigator, Screen } = createStackNavigator<Inavigation>()
  
  async function themeVeri() {
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

  async function nameVeri() {
    try {
      if (await AsyncStorage.getItem('name') !== null) {
        setName(await AsyncStorage.getItem('name'))
      }
    } catch {

    }
  }

  async function veriGeral() {
    updateApp().then(async () => {
      await themeVeri()
      await nameVeri()
      
      setPronto(true)
    })
  }

  useEffect(() => {
    veriGeral().then()
  }, [])

  useEffect(() => {
    themeVeri().then()
  }, [theme])

  useEffect(() => {
    nameVeri().then()
  }, [name])
  
  if (!pronto) {
    return <AppLoading/>
  } else {
    return (
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <StatusBar
          animated={true}
          style={theme === 'dark' ? 'light' : 'dark'}
        />
        <NavigationContainer theme={theme === 'dark' ? {
          colors: {
            background: dark.backgroundColor,
            border: dark.color,
            card: dark.primary,
            notification: dark.secondary,
            primary: dark.primary,
            text: dark.color
          },
          dark: true
        } : {
          colors: {
            background: light.backgroundColor,
            border: light.color,
            card: light.primary,
            notification: light.secondary,
            primary: light.primary,
            text: light.color
          },
          dark: false
        }}>
          <Navigator screenOptions={{
            headerShown: false
          }} initialRouteName={name ? 'Home' : 'Login'}>
            <Screen name="Login" component={Login}/>
            <Screen name="Home">
              {props => <Home {...props} name={name} veriGeral={veriGeral}/>}
            </Screen>
            <Screen name="Settings">
              {props => <Settings
                {...props}
                theme={theme}
                setTheme={theme => setTheme(theme)}
                veriGeral={veriGeral}
              />}
            </Screen>
            <Screen name="Exercises" component={Exercises}/>
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}

export default App