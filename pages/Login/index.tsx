import React, { useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'
import { useTheme } from 'styled-components'
import ContainerPd from '../../components/ContainerPd'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import { Title, Form, Campo, Label, Input, Button, TextButton } from './style'
import submit from './submit'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'Login'>['navigation']
}

export default function Home({ navigation }: Iprops) {
  const [name, setName] = useState('')
  const theme = useTheme()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerPd>
        <KeyboardAvoidingView behavior="position" enabled>
          <Title>Login</Title>
          <Form>
            <Campo>
              <Label>Como você se chama?</Label>
              <Input
                value={name}
                maxLength={25}
                autoCorrect={false}
                placeholder="Nome..."
                onChangeText={setName}
                autoCompleteType="username"
                selectionColor={theme.primary}
                placeholderTextColor={theme.color}
              />
            </Campo>
            <Button onPress={() => submit(name, navigation)}>
              <TextButton>Pronto</TextButton>
            </Button>
          </Form>
        </KeyboardAvoidingView>
      </ContainerPd>
    </TouchableWithoutFeedback>
  )
}