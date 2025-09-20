import { NextResponse } from "next/server"

// Mock session data
const sessions = [
  {
    id: "1",
    mentorId: "1",
    menteeId: "user1",
    scheduledAt: "2024-12-15T14:00:00Z",
    durationMinutes: 60,
    sessionType: "video",
    topic: "Product Strategy Review",
    status: "confirmed",
    price: 150,
    mentor: {
      name: "Sarah Chen",
      avatar: "/professional-woman-diverse.png",
    },
  },
  {
    id: "2",
    mentorId: "2",
    menteeId: "user1",
    scheduledAt: "2024-12-18T10:00:00Z",
    durationMinutes: 60,
    sessionType: "video",
    topic: "Engineering Leadership",
    status: "pending",
    price: 200,
    mentor: {
      name: "Michael Rodriguez",
      avatar: "/professional-man.png",
    },
  },
]

export async function GET() {
  return NextResponse.json(sessions)
}

export async function POST(request: Request) {
  const body = await request.json()

  // In a real app, this would save to database
  const newSession = {
    id: Math.random().toString(36).substr(2, 9),
    ...body,
    status: "pending",
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(newSession, { status: 201 })
}
