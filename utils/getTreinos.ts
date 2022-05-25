import { Dispatch, SetStateAction, useCallback, DependencyList } from 'react'
import { Itreino } from '../types'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

function getTreinos(setTreinos: Dispatch<SetStateAction<Itreino[]>>, work?: Function, dependencies?: DependencyList) {
    useFocusEffect(
        useCallback(() => {
            async function getTreinos() {
                const data = await AsyncStorage.getItem('@exercise-app:treinos')
                const dataConverted = JSON.parse(data)
                
                setTreinos(dataConverted || [])
            }
            
            getTreinos().then()
            work && work()
        }, dependencies || [])
    )
}

export default getTreinos