import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import { useTheme } from 'styled-components'
import treinosVeri from '../../utils/treinosVeri'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, ContainerIconAdd, IconAdd } from './style'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Exercises'>['navigation']
  route: NativeStackScreenProps<Inavigation, 'Exercises'>['route']
}

export default function Exercises({ navigation, route }: Iprops) {
  const theme = useTheme()
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
          {treinos.map(treino => (
            <View key={treino.id}>
              <Text style={{color: theme.secondaryColor}}>{treino.name}</Text>
            </View>
          ))}
      </ContainerPd>
    )
  } else {
    return null
  }
}