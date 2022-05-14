import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'

interface Iprops {
    navigation: NativeStackScreenProps<Inavigation, 'EditExercises'>['navigation']
    route: NativeStackScreenProps<Inavigation, 'EditExercises'>['route']
}

const EditExercises: FC<Iprops> = ({ navigation, route }) => {
    const { exercise } = route.params
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Em breve"/>
            <Title>Em breve &#x1F61C;</Title>
        </ContainerPd>
    )
}

export default EditExercises