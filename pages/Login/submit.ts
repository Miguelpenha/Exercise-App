import { NavigationProp } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function submit(name: string, navigation: NavigationProp<ReactNavigation.RootParamList, keyof ReactNavigation.RootParamList>) {
    if (name) {
        if (name.length >= 3 && name.length <= 25) {
            AsyncStorage.setItem('name', name, () => 
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                })
            )
        }
    }
}

export default submit