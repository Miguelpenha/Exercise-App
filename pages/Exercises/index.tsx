import React, { useRef, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Inavigation, Itreino } from '../../types'
import treinosVeri from '../../utils/treinosVeri'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, ContainerIconAdd, IconAdd } from './style'
import Exercise from '../../components/Exercise'
import { FlatList, RefreshControl } from 'react-native'
import { useTheme } from 'styled-components'
import { Modalize } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import ModalInfoRef from './ModalInfoRef'

function Exercises() {
  const route = useRoute()
  const navigation = useNavigation()
  const modalInfoRef = useRef<Modalize>(null)
  const { reload } = route.params as Inavigation['Exercises']
  const theme = useTheme()
  const [selectExercise, setSelectExercise] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const [treinos, setTreinos] = useState<Itreino[]>([])

  async function onRefreshAction() {
    setRefreshing(true)

    await treinosVeri(treinos, setTreinos)

    setRefreshing(false)
  }

  if (reload) {
    treinosVeri(treinos, setTreinos).then()
  } else {
    AsyncStorage.getItem('treinos', (err, treinosOrigen) => setTreinos(JSON.parse(treinosOrigen)))
  }

  if (treinos) {
    return (
      <ContainerPd>
          <HeaderBack onClick={() => navigation.goBack()} title="Treinos"/>
          <FlatList
            data={treinos}
            ListHeaderComponent={() => <>
              <Title>Treinos</Title>
              <ContainerIconAdd onPress={() => navigation.navigate('AddExercises')}>
                <IconAdd name="add" size={50}/>
              </ContainerIconAdd>
            </>}
            refreshControl={(
              <RefreshControl
                refreshing={refreshing}
                colors={[theme.primary]}
                onRefresh={onRefreshAction}
                progressBackgroundColor={theme.secondary}
              />
            )}
            renderItem={({ item: exercise }) => (
              <Exercise openModalInfoRef={() => {
                modalInfoRef.current.open()
                setSelectExercise(exercise)
              }} navigation={navigation} key={exercise.id} exercise={exercise} onPress={() => navigation.navigate('Exercise', {
                exercise
              })} onDelete={() => {
                treinosVeri(treinos, setTreinos).then()
              }}/>
            )}
          />
          <Modalize ref={modalInfoRef} modalHeight={RFPercentage(80)} modalStyle={{backgroundColor: theme.secondary}}>
            <ModalInfoRef exercise={selectExercise}/>
          </Modalize>
      </ContainerPd>
    )
  } else {
    return null
  }
}

export default Exercises