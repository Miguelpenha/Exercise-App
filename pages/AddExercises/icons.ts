import { MaterialIcons } from '@expo/vector-icons'

type IMaterialIcons = keyof typeof MaterialIcons.glyphMap

const icons: IMaterialIcons[] = [
    'fitness-center',
    'sports-mma',
    'sports-soccer',
    'pool',
    'sports-football',
    'pedal-bike',
    'sports-tennis',
    'sports-volleyball',
]

export default icons