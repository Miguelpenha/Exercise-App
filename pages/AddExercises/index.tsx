import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Itreino } from '../../types'
import { useTheme } from 'styled-components'
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
import icons from './icons'
import getTreinos from '../../utils/getTreinos'
import Alert from './Alert'

function AddExercises() {
  const [treinos, setTreinos] = useState<Itreino[]>([])
  const theme = useTheme()
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [séries, setSéries] = useState('')
  const [quantity, setQuantity] = useState('')
  const [icon, setIcon] = useState<keyof typeof MaterialIcons.glyphMap>('fitness-center')
  const modalRef = useRef<Modalize>(null)
  
  getTreinos(setTreinos)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ContainerPd>
        <HeaderBack onClick={() => navigation.goBack()} title="Adicionar treino"/>
        <Title>Adicionar Treino</Title>
        <KeyboardAvoidingView behavior="height" enabled>
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
              {name.length !== 0 && name.length < 3 && <Alert icon="info-outline">Nome muito curto</Alert>}
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
          modalHeight={RFPercentage(62)}
          modalStyle={{backgroundColor: theme.secondary, alignItems: 'center', justifyContent: 'center', paddingTop: '5%'}}
          childrenStyle={{width: '100%', alignItems: 'center'}}
          flatListProps={{
            data: icons,
            keyExtractor: (item, index) => String(index),
            renderItem: ({ item }: ListRenderItemInfo<keyof typeof MaterialIcons.glyphMap>) => (
              <Icon
                name={item}
                style={{marginTop: 20, marginBottom: 20, marginRight: 40, marginLeft: 40}}
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
}

export default AddExercises