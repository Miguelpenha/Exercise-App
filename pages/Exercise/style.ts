import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Name = styled.Text`
    width: 85%;
    margin-top: 5%;
    font-weight: bold;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const ContainerSéries = styled.View`
    width: 75%;
    margin-top: 15%;
    align-self: center;
`

export const TitleSéries = styled.Text`
    width: 50%;
    padding: 1%;
    padding-top: 2%;
    font-weight: bold;
    margin-bottom: 12%;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(4)}px;
    border-radius: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
    border: ${RFPercentage(0.4)}px solid ${props => props.theme.primary};
`

export const ContainerOptions = styled.View`
    flex-direction: row;
`

export const ContainerRemoveIcon = styled.TouchableOpacity`
    margin-right: auto;
    align-self: center;
    border-radius: ${RFPercentage(6)}px;
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.disabled ? props.theme.backgroundColor : props.theme.primary};
`

interface IRemoveIcon {
    disabled: boolean
}

export const RemoveIcon = styled(MaterialIcons)<IRemoveIcon>`
    color: ${props => props.disabled ? props.theme.primary : props.theme.color};
`

export const Séries = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(10)}px;
    color: ${props => props.theme.primary};
`

export const ContainerAddIcon = styled.TouchableOpacity`
    margin-left: auto;
    align-self: center;
    border-radius: ${RFPercentage(6)}px;
    border: 2px solid ${props => props.theme.primary};
    background-color: ${props => props.disabled ? props.theme.backgroundColor : props.theme.primary};
`

interface IAddIcon {
    disabled: boolean
}

export const AddIcon = styled(MaterialIcons)<IAddIcon>`
    color: ${props => props.disabled ? props.theme.primary : props.theme.color};
`

export const Message = styled.Text`
    margin-top: 15%;
    font-weight: bold;
    text-align: center;
    align-self: center;
    font-size: ${RFPercentage(6)}px;
    line-height: ${RFPercentage(9)}px;
    color: ${props => props.theme.primary};
`

export const ContinueButton = styled.TouchableOpacity`
    padding: 1% 2%;
    margin-top: 10%;
    align-self: center;
    flex-direction: row;
    border-radius: ${RFPercentage(5)}px;
    background-color: ${props => props.theme.primary};
    
`

export const TextContinueButton = styled.Text`
    margin-left: 5%;
    font-weight: bold;
    text-align: center;
    align-self: center;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const IconContinueButton = styled(MaterialIcons)`
    margin-left: 1%;
    align-self: center;
    color: ${props => props.theme.color};
`