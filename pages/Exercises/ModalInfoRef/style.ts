import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
    padding: 2%;
    padding-bottom: ${RFPercentage(62.5)}px;
`

export const Campo = styled.View`
    padding: 1%;
    margin-top: 5%;
    flex-direction: row;
`

export const Label = styled.Text`
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const Info = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.primary};
`

export const Button = styled.TouchableOpacity`
    width: 42%;
    padding: 1.8%;
    margin-top: 10%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(4)}px;
    background-color: ${props => props.theme.primary};
`

export const TextButton = styled.Text`
    margin-left: 4%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const IconButton = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`