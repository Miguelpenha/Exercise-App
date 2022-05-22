import { Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function nameVeri(setName: Dispatch<SetStateAction<string>>) {
    const nameOrigin = await AsyncStorage.getItem('name')

    if (nameOrigin) {
      setName(nameOrigin)
    } else {
      setName(null)
    }
}

export default nameVeri