import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Title = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Form = styled.View`
    width: 95%;
    padding: 5%;
    margin-top: 10%;
    margin-bottom: 5%;
    align-self: center;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${props => props.theme.secondary};
`

export const Campo = styled.View`
    margin-bottom: 5%;
`

export const Label = styled.Text`
    margin-bottom: 3%;
    font-weight: bold;
    font-size: ${RFPercentage(3)}px;
    color: ${props => props.theme.color};
`

export const Input = styled.TextInput`
    padding: 4%;
    font-size: ${RFPercentage(3)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondaryColor};
`

export const Button = styled.TouchableOpacity`
    width: 55%;
    margin-top: 5%;
    margin-bottom: 5%;  
    align-self: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.primary};
`

export const TextButton = styled.Text`
    padding: 8%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.color};
`