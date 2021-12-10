import supabase from "@root/supabase"
import { Session, User } from '@supabase/supabase-js'

export interface Credentials {
  email: string
  password: string
}

export const signUp = async ({ email, password }: Credentials): Promise<{ user: User | null, session: Session | null }> => {
  const { user, session, error } = await supabase.auth.signUp({ email, password })
  if (error !== null) throw new Error("Une erreur est survenue, " + error.message)
  return { user, session }
}

export const signIn = async ({ email, password }: Credentials): Promise<{ user: User | null, session: Session | null }> => {
  const { user, session, error } = await supabase.auth.signIn({ email, password })
  if (error !== null) throw new Error("Une erreur est survenue, " + error.message)
  return { user, session }
}

export const signInWithDiscord = async (): Promise<{ user: User | null, session: Session | null }> => {
  const { user, session, error } = await supabase.auth.signIn({ provider: "discord" })
  if (error !== null) throw new Error("Une erreur est survenue, " + error.message)
  return { user, session }
}

export const signOut = async (): Promise<"success"> => {
  const { error } = await supabase.auth.signOut()
  if (error !== null) throw new Error("Une erreur est survenue, " + error.message)
  return "success"
}