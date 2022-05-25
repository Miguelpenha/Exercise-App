import React, { FC, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import verificationTheme from './verificationTheme'
import removeData from './removeData'
import { dark as darkTheme, light as lightTheme } from '../../theme'
import { ScrollView } from 'react-native'
import { ContainerSwitch, TextSwitch, Switch, Button, IconButton, IconUpdateButton, TextButton, Version } from './style'
import Constants from 'expo-constants'
import checkUpdate from './checkUpdate'

type IsetTheme = {
    (theme: Iprops['theme']): void
}

type IveriGeral = {
    (): Promise<void>
}

interface Iprops {
    theme: 'light' | 'dark' | null | undefined
    setTheme: IsetTheme
    veriGeral: IveriGeral
}

const Settings: FC<Iprops> = ({ theme, setTheme, veriGeral }) => {
    const navigation = useNavigation()
    const [dark, setDark] = useState(theme==='light' ? false : true)
    const [checkUpdating, setCheckUpdating] = useState(false)

    useEffect(() => {
        verificationTheme(dark, theme, setTheme).then()
    }, [dark])
    
    return (
        <ContainerPd>
            <HeaderBack onClick={() => navigation.goBack()} title="Configurações"/>
            <ScrollView>
                <ContainerSwitch>
                    <TextSwitch>Tema escuro</TextSwitch>
                    <Switch trackColor={{false: darkTheme.secondary, true: lightTheme.secondary}} thumbColor={dark ? darkTheme.secondary : lightTheme.secondary} value={dark} onChange={() => dark ? setDark(false) : setDark(true)}/>
                </ContainerSwitch>
                <Button onPress={async () => await removeData(veriGeral, navigation)}>
                    <IconButton name="delete" size={32}/>
                    <TextButton>Apagar dados</TextButton>
                </Button>
                <Button disabled={checkUpdating} onPress={async () => checkUpdate(setCheckUpdating)} loading={checkUpdating}>
                    <IconUpdateButton checkUpdating={checkUpdating} name="sync" size={32}/>
                    <TextButton>Verificar atualizações</TextButton>
                </Button>
            </ScrollView>
            <Version>Versão {Constants.manifest.version}</Version>
        </ContainerPd>
    )
}

export default Settings