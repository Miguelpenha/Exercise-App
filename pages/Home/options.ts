import { Ioption } from './type'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Inavigation } from '../../types'

function options(navigation: NativeStackScreenProps<Inavigation, 'Home'>['navigation']): Ioption[] {
  return [
    {
      title: 'Treinos',
      icon: 'fitness-center',
      onClick: () => navigation.navigate('Exercises', {
        reload: true
      })
    }
  ]
}

export default options