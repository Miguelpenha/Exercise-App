import React, { useState } from 'react'
import { Appearance } from 'react-native'
import { Itreino, Inavigation } from './types'
import { createStackNavigator } from '@react-navigation/stack'
import effectsGeral from './utils/effectsGeral'
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import Login from './pages/Login'
import Home from './pages/Home'
import veriGeral from './utils/veriGeral'
import Settings from './pages/Settings'
import Exercises from './pages/Exercises'
import AddExercises from './pages/AddExercises'
import Exercise from './pages/Exercise'
import EditExercises from './pages/EditExercises'
import 'react-native-gesture-handler'

function App() {
  const [pronto, setPronto] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | null | undefined>(Appearance.getColorScheme())
  const [name, setName] = useState<string>(null)
  const [treinos, setTreinos] = useState<Itreino[]>([])
  const { Navigator, Screen } = createStackNavigator<Inavigation>()

  effectsGeral(theme, setTheme, name, setName, treinos, setTreinos, setPronto)
  
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
              {props => 
                <Home
                  {...props}
                  name={name}
                  veriGeral={async () => (
                    await veriGeral(setTheme, setName, treinos, setTreinos, setPronto)
                  )}
                />
              }
            </Screen>
            <Screen name="Settings">
              {props => <Settings
                {...props}
                theme={theme}
                setTheme={theme => setTheme(theme)}
                veriGeral={async () => (
                  await veriGeral(setTheme, setName, treinos, setTreinos, setPronto)
                )}
              />}
            </Screen>
            <Screen name="Exercises" component={Exercises}/>
            <Screen name="AddExercises" component={AddExercises}/>
            <Screen name="Exercise" component={Exercise}/>
            <Screen name="EditExercises" component={EditExercises}/>
          </Navigator>
        </NavigationContainer>
      </ThemeProvider>
    )
  }
}

export default App