import styled from 'styled-components/native'
import ButtonBackNotStyled from '../ButtonBack'

export const Container = styled.View`
    padding-top: 10%;
    margin-bottom: 2%;
    align-items: center;
    flex-direction: row;
`

export const ButtonBack = styled(ButtonBackNotStyled)`
    margin-top: 5%;
    margin-left: 2%;
    align-self: flex-start;
`

export const ContainerHeader = styled.View`
    flex: 1;
    padding-left: 1%;
    margin-right: 5%;
    align-items: flex-start;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-right: 5%;
    font-weight: 400;
    color: ${props => props.theme.secondaryColor};
`