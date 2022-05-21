import { NavigationProp } from '@react-navigation/native'
import { Itreino } from '../../types'
import { MaterialIcons } from '@expo/vector-icons'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function submit(navigation: NavigationProp<ReactNavigation.RootParamList, keyof ReactNavigation.RootParamList>, treinos: Itreino[], name: string, séries: number, quantity: number, icon: keyof typeof MaterialIcons.glyphMap) {
    if (name && séries && icon && quantity) {
        if (name.length >= 3 && name.length <= 25 && String(séries).length >= 1 && String(séries).length <= 4 && String(quantity).length >= 1 && String(quantity).length <= 4) {
            treinos.push({
                id: String(uuid.v4()),
                name,
                séries,
                icon,
                quantity
            })

            await AsyncStorage.setItem('treinos', JSON.stringify(treinos))

            navigation.navigate('Exercises', {
                reload: true
            })
        }
    }
}

export default submit