import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationProp } from '@react-navigation/native'

type IveriGeral = {
    (): Promise<void>
}

async function removeData(veriGeral: IveriGeral, navigation: NavigationProp<ReactNavigation.RootParamList, keyof ReactNavigation.RootParamList>) {
    await AsyncStorage.multiRemove(['theme', 'name', 'treinos'])
    await veriGeral()
    
    navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
    })
}

export default removeData