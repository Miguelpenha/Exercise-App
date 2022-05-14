import React, { FC } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { Itreino } from '../../types'
import { TouchableOpacityProps } from 'react-native'
import { Container, Row1, Icon, Name, Row2, ContainerDate, ContainerDateCenter, ContainerQuantity, Quantity, IconQuantity, ContainerSéries, Séries, IconSéries, Options, ContainerIconEdit, IconEdit, ContainerIconDelete, IconDelete } from './style'
import limitText from '../../utils/limitText'
import deleteExercise from './deleteExercise'

interface Iprops extends TouchableOpacityProps {
    exercise: Itreino
    onDelete: Function
    navigation: NativeStackScreenProps<Inavigation>['navigation']
    openModalInfoRef: Function
}

const Exercise: FC<Iprops> = ({ exercise, onDelete, navigation, openModalInfoRef, ...props }) => {
    return (
        <Container {...props}>
            <Row1>
                <Icon name={exercise.icon} size={38}/>
                <Name>{limitText(exercise.name, 21)}</Name>
            </Row1>
            <Row2>
                <ContainerDate onPress={() => openModalInfoRef()}>
                    <ContainerDateCenter>
                        <ContainerQuantity>
                            <Quantity>{exercise.quantity}</Quantity>
                            <IconQuantity name="fact-check" size={28}/>
                        </ContainerQuantity>
                        <ContainerSéries>
                            <Séries>{exercise.séries}</Séries>
                            <IconSéries name="cached" size={32}/>
                        </ContainerSéries>
                    </ContainerDateCenter>
                </ContainerDate>
                <Options>
                    <ContainerIconEdit onPress={() => navigation.navigate('EditExercises', {
                        exercise
                    })}>
                        <IconEdit name="edit" size={32}/>
                    </ContainerIconEdit>
                    <ContainerIconDelete onPress={async () => {
                        await deleteExercise(exercise.id)
                        onDelete()
                    }}>
                        <IconDelete name="delete" size={32}/>
                    </ContainerIconDelete>
                </Options>
            </Row2>
        </Container>
    )
}

export default Exercise