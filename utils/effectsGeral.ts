import { Dispatch, SetStateAction, useEffect } from 'react'
import { Itreino } from '../types'
import veriGeral from './veriGeral'
import themeVeri from './themeVeri'
import nameVeri from './nameVeri'
import treinosVeri from './treinosVeri'

function effectsGeral(theme: 'light' | 'dark', setTheme: Dispatch<SetStateAction<'light' | 'dark'>>, name: string, setName: Dispatch<SetStateAction<String>>, treinos: Itreino[], setTreinos: Dispatch<SetStateAction<Itreino[]>>, setPronto: Dispatch<SetStateAction<boolean>>) {
    useEffect(() => {
        veriGeral(setTheme, setName, treinos, setTreinos, setPronto).then()
    }, [])

    useEffect(() => {
        themeVeri(setTheme).then()
    }, [theme])

    useEffect(() => {
        nameVeri(setName).then()
    }, [name])

    useEffect(() => {
        treinosVeri(treinos, setTreinos).then()
    }, [treinos])
}

export default effectsGeral