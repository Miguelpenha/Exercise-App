import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

function submit(navigation: NativeStackScreenProps<Inavigation, 'AddExercises'>['navigation'], treinos: Itreino[], name: string, séries: number) {
    if (name && séries) {
        if (name.length >= 3 && name.length <= 25 && String(séries).length >= 1 && String(séries).length <= 4) {
            treinos.push({
                name,
                séries
            })

            AsyncStorage.setItem('treinos', JSON.stringify(treinos), () => 
                navigation.navigate('Exercises', {
                    reload: true
                })
            )
        }
    }
}

export default submit