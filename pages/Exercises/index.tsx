import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import treinosVeri from '../../utils/treinosVeri'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, ContainerIconAdd, IconAdd } from './style'
import Exercise from '../../components/Exercise'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Exercises'>['navigation']
  route: NativeStackScreenProps<Inavigation, 'Exercises'>['route']
}

export default function Exercises({ navigation, route }: Iprops) {
  const { reload } = route.params
  const [treinos, setTreinos] = useState<Itreino[]>([])

  if (reload) {
    treinosVeri(treinos, setTreinos).then()
  } else {
    AsyncStorage.getItem('treinos', (err, treinosOrigen) => setTreinos(JSON.parse(treinosOrigen)))
  }

  if (treinos) {
    return (
      <ContainerPd>
          <HeaderBack onClick={() => navigation.goBack()}/>
          <Title>Treinos</Title>
          <ContainerIconAdd onPress={() => navigation.navigate('AddExercises')}>
            <IconAdd name="add" size={50}/>
          </ContainerIconAdd>
          {treinos.map(exercise => (
            <Exercise exercise={exercise} onPress={() => navigation.navigate('Exercise', {
              exercise
            })} onDelete={() => {
              treinosVeri(treinos, setTreinos).then()
            }}/>
          ))}
      </ContainerPd>
    )
  } else {
    return null
  }
}