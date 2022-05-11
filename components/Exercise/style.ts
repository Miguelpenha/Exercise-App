import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    width: 90%;
    padding: 3%;
    margin-top: 6%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(2.5)}px;
    background-color: ${props => props.theme.primary};
`

export const Icon = styled(MaterialIcons)`
    margin-right: 4%;
    align-self: center;
    color: ${props => props.theme.color};
`

export const Name = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.color};
`

export const Séries = styled.Text`
    padding-left: 4%;
    margin-right: 2%;
    font-weight: bold;
    margin-left: auto;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.color};
    border-left-width: ${RFPercentage(0.4)}px;
    border-left-color: ${props => props.theme.color};
`

export const ContainerIconDelete = styled.TouchableOpacity`
    align-self: center;
`

export const IconDelete = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`