import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Exercises'>['navigation']
}

export default function Exercises({ navigation }: Iprops) {
  return (
    <ContainerPd>
        <HeaderBack onClick={() => navigation.goBack()}/>
        <Title>Treinos</Title>
    </ContainerPd>
  )
}