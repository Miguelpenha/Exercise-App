import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

function submit(name: string, navigation: NativeStackScreenProps<Inavigation, 'Login'>['navigation']) {
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