import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.View`
    padding: 2%;
    margin-top: 4%;
    flex-direction: row;
    align-items: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.backgroundColor};
`

export const Icon = styled(MaterialIcons)`
    color: red;
    margin-right: 2%;
`

export const Message = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(2.4)}px;
    color: ${props => props.theme.primary};
`