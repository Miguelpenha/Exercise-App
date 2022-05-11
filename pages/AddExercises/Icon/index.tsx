import { FC } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'
import { Container, IconSelect } from './style'


interface Iprops extends TouchableOpacityProps {
    name: keyof typeof MaterialIcons.glyphMap
}

const Icon: FC<Iprops> = ({ name, ...props }) => {
    return (
        <Container {...props}>
            <IconSelect name={name} size={50}/>
        </Container>
    )
}

export default Icon