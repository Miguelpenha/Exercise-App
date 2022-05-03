import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import { useTheme } from 'styled-components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, Form, Campo, Label, Input, Button, TextButton } from './style'
import submit from './submit'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'AddExercises'>['navigation']
}

export default function AddExercises({ navigation }: Iprops) {
  const [treinos, setTreinos] = useState<Itreino[]>([])
  const theme = useTheme()
  const [name, setName] = useState('')
  const [séries, setSéries] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('treinos', (err, treinosOrigen) => (
      setTreinos(JSON.parse(treinosOrigen))
    ))
  }, [])

  if (treinos) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerPd>
          <KeyboardAvoidingView behavior="position" enabled>
            <HeaderBack onClick={() => navigation.goBack()}/>
            <Title>Adicionar Treino</Title>
            <Form>
              <Campo>
                <Label>Nome do treino</Label>
                <Input
                  value={name}
                  maxLength={25}
                  placeholder="Nome..."
                  onChangeText={setName}
                  selectionColor={theme.primary}
                  placeholderTextColor={theme.color}
                />
              </Campo>
              <Campo>
                <Label>Quantidade de séries</Label>
                <Input
                  maxLength={4}
                  value={séries}
                  placeholder="Séries..."
                  onChangeText={setSéries}
                  keyboardType="number-pad"
                  autoCompleteType="cc-number"
                  selectionColor={theme.primary}
                  placeholderTextColor={theme.color}
                />
              </Campo>
              <Button onPress={() => submit(navigation, treinos, name, Number(séries))}>
                <TextButton>Adicionar</TextButton>
              </Button>
            </Form>
          </KeyboardAvoidingView>
        </ContainerPd>
      </TouchableWithoutFeedback>
    )
  } else {
    return null
  }
}