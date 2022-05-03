import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import treinosVeri from '../../utils/treinosVeri'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, ContainerIconAdd, IconAdd } from './style'
import { View, Text } from 'react-native'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Exercises'>['navigation']
  route: NativeStackScreenProps<Inavigation, 'Exercises'>['route']
}

export default function Exercises({ navigation, route }: Iprops) {
  const { reload } = route.params
  const [treinos, setTreinos] = useState<Itreino[]>([])

  if (reload) {
    treinosVeri(treinos, setTreinos).then()
  }

  if (treinos) {
    return (
      <ContainerPd>
          <HeaderBack onClick={() => navigation.goBack()}/>
          <Title>Treinos</Title>
          <ContainerIconAdd onPress={() => navigation.navigate('AddExercises')}>
            <IconAdd name="add" size={50}/>
          </ContainerIconAdd>
          {treinos.map((treino, index) => (
            <View key={index}>
              <Text>{treino.name}</Text>
            </View>
          ))}
      </ContainerPd>
    )
  } else {
    return null
  }
}