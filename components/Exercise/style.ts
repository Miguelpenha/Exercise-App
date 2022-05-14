import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
    width: 90%;
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    align-self: center;
    border-radius: ${RFPercentage(2.5)}px;
    background-color: ${props => props.theme.primary};
`

export const Row1 = styled.View`
    margin-bottom: 5%;
    flex-direction: row;
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

export const Options = styled.View`
    margin-left: auto;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ContainerIconEdit = styled.TouchableOpacity`
    padding: 2%;
    align-self: center;
    border-radius: ${RFPercentage(3)}px;
`

export const IconEdit = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`

export const ContainerIconDelete = styled.TouchableOpacity`
    padding: 2%;
    align-self: center;
    border-radius: ${RFPercentage(3)}px;
`

export const IconDelete = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`

export const Row2 = styled.View`
    margin-bottom: 5%;
    flex-direction: row;
`

export const ContainerDate = styled.TouchableOpacity`
    border-radius: ${RFPercentage(3)}px;
`

export const ContainerDateCenter = styled.View`
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(3)}px;
    background-color: ${props => props.theme.color};
`

export const ContainerQuantity = styled.View`
    padding-left: 5%;
    flex-direction: row;
`

export const Quantity = styled.Text`
    margin-right: 5%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`

export const IconQuantity = styled(MaterialIcons)`
    margin-right: 2%;
    align-self: center;
    color: ${props => props.theme.primary};
`

export const ContainerSéries = styled.View`
    padding-left: 4%;
    flex-direction: row;
    border-left-width: ${RFPercentage(0.4)}px;
    border-left-color: ${props => props.theme.primary};
`

export const Séries = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.primary};
`

export const IconSéries = styled(MaterialIcons)`
    margin-left: 4%;
    align-self: center;
    color: ${props => props.theme.primary};
`