// Database utility functions for MentorConnect
// This would typically use a database client like Supabase or Neon

import { createClient } from "@/lib/supabase/client"

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  userType: "mentor" | "mentee"
  avatarUrl?: string
  bio?: string
  location?: string
  createdAt: string
  updatedAt: string
}

export interface MentorProfile {
  id: string
  userId: string
  title: string
  company?: string
  industry?: string
  experienceYears?: number
  hourlyRate: number
  rating: number
  totalSessions: number
  isAvailable: boolean
  skills: string[]
  user: User
}

export interface Session {
  id: string
  mentorId: string
  menteeId: string
  scheduledAt: string
  durationMinutes: number
  sessionType: "video" | "phone"
  topic: string
  description?: string
  status: "pending" | "confirmed" | "completed" | "cancelled"
  meetingLink?: string
  price: number
  mentor?: MentorProfile
  mentee?: User
}

export interface Review {
  id: string
  sessionId: string
  reviewerId: string
  rating: number
  comment?: string
  createdAt: string
}

export async function getMentors(filters?: {
  industry?: string
  experienceLevel?: string
  searchTerm?: string
}): Promise<MentorProfile[]> {
  const supabase = createClient()

  let query = supabase
    .from("mentor_profiles")
    .select(`
      *,
      user:users(*)
    `)
    .eq("is_available", true)

  if (filters?.industry) {
    query = query.eq("industry", filters.industry)
  }

  if (filters?.searchTerm) {
    query = query.or(`title.ilike.%${filters.searchTerm}%,company.ilike.%${filters.searchTerm}%`)
  }

  const { data, error } = await query

  if (error) {
    console.error("Error fetching mentors:", error)
    return []
  }

  return data || []
}

export async function getMentorById(id: string): Promise<MentorProfile | null> {
  const supabase = createClient()

  const { data, error } = await supabase
    .from("mentor_profiles")
    .select(`
      *,
      user:users(*)
    `)
    .eq("id", id)
    .single()

  if (error) {
    console.error("Error fetching mentor:", error)
    return null
  }

  return data
}

export async function getUserSessions(userId: string, status?: string): Promise<Session[]> {
  const supabase = createClient()

  let query = supabase
    .from("sessions")
    .select(`
      *,
      mentor:mentor_profiles(*),
      mentee:users(*)
    `)
    .or(`mentor_id.eq.${userId},mentee_id.eq.${userId}`)

  if (status) {
    query = query.eq("status", status)
  }

  const { data, error } = await query.order("scheduled_at", { ascending: false })

  if (error) {
    console.error("Error fetching sessions:", error)
    return []
  }

  return data || []
}

export async function createSession(sessionData: Omit<Session, "id">): Promise<Session> {
  const supabase = createClient()

  const { data, error } = await supabase.from("sessions").insert([sessionData]).select().single()

  if (error) {
    throw new Error(`Failed to create session: ${error.message}`)
  }

  return data
}

export async function updateSessionStatus(sessionId: string, status: Session["status"]): Promise<void> {
  const supabase = createClient()

  const { error } = await supabase.from("sessions").update({ status }).eq("id", sessionId)

  if (error) {
    throw new Error(`Failed to update session status: ${error.message}`)
  }
}

export async function createReview(reviewData: Omit<Review, "id">): Promise<Review> {
  const supabase = createClient()

  const { data, error } = await supabase.from("reviews").insert([reviewData]).select().single()

  if (error) {
    throw new Error(`Failed to create review: ${error.message}`)
  }

  return data
}
