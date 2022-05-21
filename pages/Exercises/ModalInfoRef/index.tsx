import React, { FC } from 'react'
import { Itreino } from '../../../types'
import { Modalize } from 'react-native-modalize'
import { Container, Campo, Label, Info, Button, TextButton, IconButton } from './style'

interface IonNext {
    (exercise: Itreino): void
}

interface Iprops {
    exercise: Itreino
    onNext: IonNext
    modal: React.MutableRefObject<Modalize>
}

const ModalInfoRef: FC<Iprops> = ({ exercise, modal, onNext }) => {
    return (
        <Container>
            <Campo>
                <Label>Quantidade de exercícios </Label>
                <Info>{exercise.quantity}</Info>
            </Campo>
            <Campo>
                <Label>Quantidade de séries </Label>
                <Info>{exercise.séries}</Info>
            </Campo>
            <Button onPress={() => {
                modal.current.close()
                onNext(exercise)
            }}>
                <TextButton>Começar</TextButton>
                <IconButton name="navigate-next" size={40}/>
            </Button>
        </Container>
    )
}

export default ModalInfoRef