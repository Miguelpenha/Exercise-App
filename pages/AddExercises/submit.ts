import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import { MaterialIcons } from '@expo/vector-icons'
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function submit(navigation: NativeStackScreenProps<Inavigation, 'AddExercises'>['navigation'], treinos: Itreino[], name: string, séries: number, icon: keyof typeof MaterialIcons.glyphMap) {
    if (name && séries && icon) {
        if (name.length >= 3 && name.length <= 25 && String(séries).length >= 1 && String(séries).length <= 4) {
            treinos.push({
                id: String(uuid.v4()),
                name,
                séries,
                icon
            })

            await AsyncStorage.setItem('treinos', JSON.stringify(treinos))

            navigation.navigate('Exercises', {
                reload: true
            })
        }
    }
}

export default submit