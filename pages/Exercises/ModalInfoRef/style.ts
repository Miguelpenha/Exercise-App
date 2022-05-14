import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

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