export interface Itheme {
  name: string
  color: string
  check: string
  primary: string
  secondary: string
  secondaryColor: string
  backgroundColor: string
}

export type Inavigation = {
  Home: undefined
  Login: undefined
  Settings: undefined
  Exercises: {
    reload: boolean
  }
  Exercise: {
    exercise: Itreino
  }
  AddExercises: undefined
}

export interface Itreino {
  id: string
  name: string
  icon: string
  séries: number
}