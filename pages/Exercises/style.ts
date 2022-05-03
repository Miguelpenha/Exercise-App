import styled from 'styled-components/native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { MaterialIcons } from '@expo/vector-icons'

export const Title = styled.Text`
    font-weight: bold;
    align-self: center;
    font-size: ${RFPercentage(5)}px;
    color: ${props => props.theme.primary};
`

export const ContainerIconAdd = styled.TouchableOpacity`
    margin-top: 8%;
    margin-right: 10%;
    align-self: flex-end;
    border-radius: ${RFPercentage(20)}px;
    background-color: ${props => props.theme.primary};
`

export const IconAdd = styled(MaterialIcons)`
    color: ${props => props.theme.color};
`