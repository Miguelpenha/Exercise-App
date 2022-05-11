import { Itreino } from '../../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function deleteExercise(id: string) {
    const treinosNews: Itreino[] = []
    const treinos: Itreino[] = JSON.parse(await AsyncStorage.getItem('treinos'))

    treinos.map(treino => id != treino.id && treinosNews.push(treino))

    await AsyncStorage.setItem('treinos', JSON.stringify(treinosNews))
}

export default deleteExercise