import { Dispatch, SetStateAction } from 'react'
import { Itreino } from '../types'
import updateApp from './updateApp'
import themeVeri from './themeVeri'
import nameVeri from './nameVeri'
import treinosVeri from './treinosVeri'

async function veriGeral(setTheme: Dispatch<SetStateAction<'light' | 'dark'>>, setName: Dispatch<SetStateAction<String>>, treinos: Itreino[], setTreinos: Dispatch<SetStateAction<Itreino[]>>, setPronto: Dispatch<SetStateAction<boolean>>) {
    updateApp().then(async () => {
      await themeVeri(setTheme)
      await nameVeri(setName)
      await treinosVeri(treinos, setTreinos)
      
      setPronto(true)
    })
}

export default veriGeral