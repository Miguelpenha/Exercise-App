import React, { useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Itreino } from '../../types'
import ContainerPd from '../../components/ContainerPd'
import HeaderBack from '../../components/HeaderBack'
import { Title, ContainerIconAdd, IconAdd } from './style'
import Exercise from '../../components/Exercise'
import { FlatList, RefreshControl } from 'react-native'
import { useTheme } from 'styled-components'
import { Modalize } from 'react-native-modalize'
import { RFPercentage } from 'react-native-responsive-fontsize'
import ModalInfoRef from './ModalInfoRef'
import getTreinos from '../../utils/getTreinos'

function Exercises() {
  const navigation = useNavigation()
  const modalInfoRef = useRef<Modalize>(null)
  const theme = useTheme()
  const [selectExercise, setSelectExercise] = useState(null)
  const [refreshing, setRefreshing] = useState(false)
  const [treinos, setTreinos] = useState<Itreino[]>([])
  const [refreshTreinos, setRefreshTreinos] = useState(false)

  getTreinos(setTreinos, () => {
    setRefreshTreinos(false)
  }, [refreshTreinos])

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
              onRefresh={() => {
                setRefreshing(true)

                setRefreshTreinos(true)
                
                setRefreshing(false)
              }}
              progressBackgroundColor={theme.secondary}
            />
          )}
          renderItem={({ item: exercise }) => (
            <Exercise openModalInfoRef={() => {
              modalInfoRef.current.open()
              setSelectExercise(exercise)
            }} navigation={navigation} key={exercise.id} exercise={exercise} onPress={() => navigation.navigate('Exercise', {
              exercise
            })} onDelete={() => setRefreshTreinos(true)}/>
          )}
          keyExtractor={(item, index) => String(index)}
        />
        <Modalize ref={modalInfoRef} modalHeight={RFPercentage(80)} modalStyle={{backgroundColor: theme.secondary}}>
          <ModalInfoRef modal={modalInfoRef} exercise={selectExercise} onNext={exercise => navigation.navigate('Exercise', {
            exercise
          })}/>
        </Modalize>
    </ContainerPd>
  )
}

export default Exercises