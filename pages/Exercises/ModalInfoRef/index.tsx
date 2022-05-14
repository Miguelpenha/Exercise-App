import React, { FC } from 'react'
import { Itreino } from '../../../types'
import { Container, Campo, Label, Info } from './style'

interface Iprops {
    exercise: Itreino
}

const ModalInfoRef: FC<Iprops> = ({ exercise }) => {
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
        </Container>
    )
}

export default ModalInfoRef