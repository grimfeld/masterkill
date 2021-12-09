import { Session } from "../types/Session"

export const createSession = async (input: Session) => {
  const {data, error} = await supabase.from('sessions').insert([input])
  if (error) throw new Error(error)
}

export const listSessions = async () => {
 const {data, error} = await supabase.from('sessions').select()
}

export const getSession = async (id: number) => {
  const {data, error} = await supabase.from('sessions').select().eq("id", id.toString())
}

export const updateSession = async () => {

}

export const deleteSession = async () => {

}