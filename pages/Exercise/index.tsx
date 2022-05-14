import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Name } from './style'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'Exercise'>['navigation']
    route: NativeStackScreenProps<Inavigation, 'Exercise'>['route']
}

const Exercise: FC<Iprops> = ({ route, navigation }) => {
    const { exercise } = route.params

    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={exercise.name}/>
            <Name>{exercise.name}</Name>
        </ContainerPd>
    )
}

export default Exercise