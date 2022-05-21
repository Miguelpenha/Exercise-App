import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import ContainerPd from '../../components/ContainerPd'
import { Header, ContainerSettings, Settings, ContainerMessage, NameUser, Message, Options } from './style'
import Option from './Option'
import { Ioption } from './type'
import { ListRenderItemInfo } from 'react-native'
import options from './options'
import 'intl'
import 'intl/locale-data/jsonp/pt-BR'
import { DateTime, HourNumbers } from 'luxon'

type IveriGeral = {
  (): Promise<void>
}

interface Iprops {
  veriGeral: IveriGeral
  name: string
}

export default function Home({ name, veriGeral }: Iprops) {
  const navigation = useNavigation()
  const [hour, setHour] = useState(DateTime.now().hour)
  
  useEffect(() => {
    setInterval(() => hour != DateTime.now().hour && setHour(DateTime.now().hour), 500)
    veriGeral().then()
  })

  function veriHour(hour: HourNumbers) {
    if (hour >= 5 && hour < 12) {
      return 'Bom dia'
    } else if (hour >= 12 && hour < 18) {
      return 'Boa tarde'
    } else {
      return 'Boa noite'
    }
  }

  return (
    <>
      {name ? (
        <ContainerPd>
          <Header>
            <ContainerSettings onPress={() => navigation.navigate('Settings')}>
              <Settings name="settings" size={40}/>
            </ContainerSettings>
          </Header>
          <ContainerMessage>
            <NameUser>Olá, {name.split(' ')[0].trim()+' '}&#x1F44B;</NameUser>
            <Message>{veriHour(hour)+' '}&#x1F604;</Message>
          </ContainerMessage>
          <Options
            horizontal
            data={options(navigation)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }: ListRenderItemInfo<Ioption>) => (
              <Option title={item.title} icon={item.icon} onClick={item.onClick}/>
            )}
          />
        </ContainerPd>
      ) : null}
    </>
  )
}