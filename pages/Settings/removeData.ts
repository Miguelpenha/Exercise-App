import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationProp } from '@react-navigation/native'

async function removeData(navigation: NavigationProp<ReactNavigation.RootParamList, keyof ReactNavigation.RootParamList>) {
    await AsyncStorage.multiRemove(['@exercise-app:theme', 'name', '@exercise-app:treinos'])
    
    navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
    })
}

export default removeData