export interface Field {
  id?: number
  label: string
  priority: number
}

export interface Round {
  id: number
  session_id: number
  results: {
    [key: string]: {
      [key: string]: number
    }
  }
}

export interface Session {
  id?: number
  user_ids: string[]
  player_names: string[]
  fields: Field[]
  round_limit: number
}

export interface Profiles {
  id?: number
  user_id: string
  fields: Field[]
}