import AsyncStorage from '@react-native-async-storage/async-storage'
import { Itreino } from '../types'

async function deleteTreino(idTreino: string) {
    const data = await AsyncStorage.getItem('@exercise-app:treinos')
    const treinos: Itreino[] = JSON.parse(data) || []
    const newsTreinos = []

    treinos.map(treino => treino.id !== idTreino && newsTreinos.push(treino))

    await AsyncStorage.setItem('@exercise-app:treinos', JSON.stringify(newsTreinos))
}

export default deleteTreino