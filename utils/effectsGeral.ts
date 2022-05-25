import { Dispatch, SetStateAction, useEffect } from 'react'
import veriGeral from './veriGeral'
import nameVeri from './nameVeri'

function effectsGeral(name: string, setName: Dispatch<SetStateAction<String>>, setPronto: Dispatch<SetStateAction<boolean>>) {
    useEffect(() => {
        veriGeral(setName, setPronto).then()
    }, [])
    
    useEffect(() => {
        nameVeri(setName).then()
    }, [name])
}

export default effectsGeral