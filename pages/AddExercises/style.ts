import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon from './Icon'

export const Title = styled.Text`
    margin-top: 2%;
    margin-bottom: 5%;
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`

export const Form = styled.ScrollView`
    width: 90%;
    padding: 5%;
    align-self: center;
    border-radius: ${RFPercentage(1)}px;
    background-color: ${props => props.theme.secondary};
`

export const IconSelect = styled(Icon)`
    margin-top: 2%;
    margin-bottom: 5%;
`

export const Campo = styled.View`
    margin-bottom: 4%;
`

export const Label = styled.Text`
    margin-bottom: 3%;
    font-weight: bold;
    font-size: ${RFPercentage(2.5)}px;
    color: ${props => props.theme.color};
`

export const Input = styled.TextInput`
    padding: 4%;
    font-size: ${RFPercentage(2.8)}px;
    border-radius: ${RFPercentage(1)}px;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.secondaryColor};
`

export const Button = styled.TouchableOpacity`
    width: 65%;
    padding: 4%;
    margin-top: 5%;
    margin-bottom: 5%;
    align-self: center;
    align-items: center;
    border-radius: ${RFPercentage(1.5)}px;
    background-color: ${props => props.theme.primary};
`

export const TextButton = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(3.5)}px;
    color: ${props => props.theme.color};
`