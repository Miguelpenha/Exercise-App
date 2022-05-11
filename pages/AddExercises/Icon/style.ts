import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
    padding: 3%;
    align-self: center;
    align-items: center;
    justify-content: center;
    border-radius: ${RFPercentage(3)}px;
    background-color: ${props => props.theme.primary};
`

export const IconSelect = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`