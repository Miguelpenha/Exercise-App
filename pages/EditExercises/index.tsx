import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title } from './style'

function EditExercises() {
    const route = useRoute()
    const navigation = useNavigation()
    const { exercise } = route.params as Inavigation['EditExercises']
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Em breve"/>
            <Title>Em breve &#x1F61C;</Title>
        </ContainerPd>
    )
}

export default EditExercises