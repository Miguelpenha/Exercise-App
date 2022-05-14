import React, { useState, useEffect, useRef } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation, Itreino } from '../../types'
import { useTheme } from 'styled-components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, Form, IconSelect, Campo, Label, Input, Button, TextButton } from './style'
import Icon from './Icon'
import { ListRenderItemInfo } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import submit from './submit'
import { Modalize } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'

interface Iprops {
  navigation: NativeStackScreenProps<Inavigation, 'AddExercises'>['navigation']
}

export default function AddExercises({ navigation }: Iprops) {
  const [treinos, setTreinos] = useState<Itreino[]>([])
  const theme = useTheme()
  const [name, setName] = useState('')
  const [séries, setSéries] = useState('')
  const [quantity, setQuantity] = useState('')
  const [icon, setIcon] = useState<keyof typeof MaterialIcons.glyphMap>('fitness-center')
  const modalRef = useRef<Modalize>(null)

  useEffect(() => {
    async function getTreinos() {
      const treinosOrigen = await AsyncStorage.getItem('treinos')

      setTreinos(JSON.parse(treinosOrigen))
    }

    getTreinos().then()
  }, [])

  const icons: (keyof typeof MaterialIcons.glyphMap)[] = [
    'fitness-center',
    'sports-mma',
    'sports-soccer',
    'pool',
    'sports-football',
    'pedal-bike',
    'sports-tennis',
    'sports-volleyball'
  ]

  if (treinos) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContainerPd>
          <KeyboardAvoidingView behavior="position" enabled>
            <HeaderBack onClick={() => navigation.goBack()} title="Adicionar treino"/>
            <Title>Adicionar Treino</Title>
            <Form>
              <IconSelect name={icon} onPress={() => {
                Keyboard.dismiss()
                modalRef.current.open()
              }}/>
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
                <Label>Quantidade de exercícios</Label>
                <Input
                  maxLength={4}
                  value={quantity}
                  keyboardType="number-pad"
                  onChangeText={setQuantity}
                  placeholder="Quantidade..."
                  autoCompleteType="cc-number"
                  selectionColor={theme.primary}
                  placeholderTextColor={theme.color}
                />
              </Campo>
              <Campo>
                <Label>Quantidade de séries (repetições)</Label>
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
              <Button onPress={async () => {
                Keyboard.dismiss()
                await submit(navigation, treinos, name, Number(séries), Number(quantity), icon)
              }}>
                <TextButton>Adicionar</TextButton>
              </Button>
            </Form>
          </KeyboardAvoidingView>
          <Modalize
            ref={modalRef}
            modalHeight={RFPercentage(85)}
            modalStyle={{backgroundColor: theme.secondary, alignItems: 'center', justifyContent: 'center', paddingTop: '5%'}}
            childrenStyle={{width: '100%', alignItems: 'center'}}
            flatListProps={{
              data: icons,
              keyExtractor: (item, index) => String(index),
              renderItem: ({ item }: ListRenderItemInfo<keyof typeof MaterialIcons.glyphMap>) => (
                <Icon
                  name={item}
                  style={{marginTop: 20, marginBottom: 20, marginRight: 30, marginLeft: 30}}
                  onPress={() => {
                    modalRef.current.close()
                    setIcon(item)
                  }}
                />
              ),
              numColumns: 2,
              style: {
                flexBasis: 0
              }
            }}
            >
          </Modalize>
        </ContainerPd>
      </TouchableWithoutFeedback>
    )
  } else {
    return null
  }
}