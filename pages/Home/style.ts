import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Header = styled.View`
    margin-top: 10%;
    align-items: center;
    flex-direction: row;
`

export const ContainerSettings = styled.TouchableOpacity`
    margin-left: 2%;
    margin-right: auto;
`

export const Settings = styled(MaterialIcons)`
    color: ${props => props.theme.primary};
`

export const ContainerMessage = styled.View`
    margin-top: 14%;
    margin-left: 10%;
    padding-left: 2.5%;
    margin-bottom: 10%;
    border-left-width: ${RFPercentage(0.5)}px;
    border-left-color: ${props => props.theme.primary};
`

export const NameUser = styled.Text`
    font-weight: bold;
    font-size: ${RFPercentage(4.4)}px;
    color: ${props => props.theme.primary};
`

export const Message = styled.Text`
    margin-top: 0.5%;
    font-size: ${RFPercentage(4)}px;
    color: ${props => props.theme.secondaryColor};
`

export const Options = styled.FlatList`
    flex-grow: 0;
    margin-top: 8%;
`