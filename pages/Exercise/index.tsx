import React, { useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Inavigation } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import limitText from '../../utils/limitText'
import {
    Name,
    ContainerSéries,
    TitleSéries,
    ContainerOptions,
    ContainerRemoveIcon,
    RemoveIcon,
    Séries,
    ContainerAddIcon,
    AddIcon,
    Message,
    ContinueButton,
    TextContinueButton,
    IconContinueButton
} from './style'

function Exercise () {
    const route = useRoute()
    const navigation = useNavigation()
    const { exercise } = route.params as Inavigation['Exercise']
    const [séries, setSéries] = useState(exercise.séries)
    const [finished, setFinished] = useState(false)

    useEffect(() => séries === 0 && setFinished(true), [séries])

    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title={limitText(exercise.name, 25)}/>
            <Name>{exercise.name}</Name>
            {!finished ? (
                <ContainerSéries>
                    <TitleSéries>Séries</TitleSéries>
                    <ContainerOptions>
                        <ContainerRemoveIcon
                            disabled={séries === 0}
                            onPress={() => séries > 0 && setSéries(séries-1)}
                        >
                            <RemoveIcon
                                size={50}
                                name="remove"
                                disabled={séries === 0}
                            />
                        </ContainerRemoveIcon>
                        <Séries>{séries}</Séries>
                        <ContainerAddIcon
                            disabled={séries >= exercise.séries}
                            onPress={() => séries < exercise.séries && setSéries(séries+1)}
                        >
                            <AddIcon
                                size={50}
                                name="add"
                                disabled={séries >= exercise.séries}
                            />
                        </ContainerAddIcon>
                    </ContainerOptions>
                </ContainerSéries>
            ) : <>
                <Message>Terminou!{'\n'}&#x1F973;</Message>
                <ContinueButton onPress={() => navigation.goBack()}>
                    <TextContinueButton>Próximo</TextContinueButton>
                    <IconContinueButton name="navigate-next" size={40}/>
                </ContinueButton>
            </>}
        </ContainerPd>
    )
}

export default Exercise