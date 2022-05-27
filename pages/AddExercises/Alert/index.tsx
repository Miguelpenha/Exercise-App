import { FC } from 'react'
import { ViewStyle, TextStyle } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Container, Icon, Message } from './style'

interface Iprops {
    icon: keyof typeof MaterialIcons.glyphMap
    style?: ViewStyle
    textStyle?: TextStyle
    iconStyle?: TextStyle
}

const Alert: FC<Iprops> = ({ icon, children, textStyle, iconStyle, ...props }) => {
    return (
        <Container {...props}>
            <Icon name={icon} size={32} style={iconStyle}/>
            <Message style={textStyle}>{children}</Message>
        </Container>
    )
}

export default Alert