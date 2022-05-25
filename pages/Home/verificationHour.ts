import { HourNumbers } from 'luxon'

function verificationHour(hour: HourNumbers): 'Bom dia' | 'Boa tarde' | 'Boa noite' {
    if (hour >= 5 && hour < 12) {
      return 'Bom dia'
    } else if (hour >= 12 && hour < 18) {
      return 'Boa tarde'
    } else {
      return 'Boa noite'
    }
}

export default verificationHour