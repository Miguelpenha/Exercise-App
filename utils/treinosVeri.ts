import { Dispatch, SetStateAction } from 'react'
import { Itreino } from '../types'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function treinosVeri(treinos: Itreino[], setTreinos: Dispatch<SetStateAction<Itreino[]>>) {
    const treinosOrigin = await AsyncStorage.getItem('treinos')

    if (treinosOrigin && treinosOrigin != JSON.stringify(treinos)) {
      setTreinos(JSON.parse(treinosOrigin))
    } else {
      AsyncStorage.setItem('treinos', JSON.stringify([]), () => {})
    }
}

export default treinosVeri