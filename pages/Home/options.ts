import { NavigationProp } from '@react-navigation/native'
import { Ioption } from './type'

function options(navigation: NavigationProp<ReactNavigation.RootParamList, keyof ReactNavigation.RootParamList>): Ioption[] {
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