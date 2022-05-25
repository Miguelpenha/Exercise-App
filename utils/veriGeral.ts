import { Dispatch, SetStateAction } from 'react'
import updateApp from './updateApp'
import nameVeri from './nameVeri'

async function veriGeral(setName: Dispatch<SetStateAction<String>>, setPronto: Dispatch<SetStateAction<boolean>>) {
    updateApp().then(async () => {
      await nameVeri(setName)
      
      setPronto(true)
    })
}

export default veriGeral