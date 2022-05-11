import { FC } from 'react'
import { Itreino } from '../../types'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Name, Séries, ContainerIconDelete, IconDelete } from './style'
import deleteExercise from './deleteExercise'

interface Iprops extends TouchableOpacityProps {
    exercise: Itreino
    onDelete: Function
}

const Exercise: FC<Iprops> = ({ exercise, onDelete, ...props }) => {
    return (
        <Container key={exercise.id} {...props}>
            <Icon name={exercise.icon} size={38}/>
            <Name>{exercise.name}</Name>
            <Séries>{exercise.séries}</Séries>
            <ContainerIconDelete onPress={async () => {
                await deleteExercise(exercise.id)
                onDelete()
            }}>
                <IconDelete name="delete" size={32}/>
            </ContainerIconDelete>
        </Container>
    )
}

export default Exercise