import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Name = styled.Text`
    width: 85%;
    margin-top: 5%;
    font-weight: bold;
    align-self: center;
    text-align: center;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.primary};
`