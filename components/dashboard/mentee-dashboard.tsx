"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Star, Search, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

const upcomingSessions = [
  {
    id: "1",
    mentor: "Sarah Chen",
    mentorAvatar: "/professional-woman-diverse.png",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    topic: "Product Strategy Review",
    type: "Video Call",
  },
  {
    id: "2",
    mentor: "Michael Rodriguez",
    mentorAvatar: "/professional-man.png",
    date: "Dec 18, 2024",
    time: "10:00 AM",
    topic: "Engineering Leadership",
    type: "Video Call",
  },
]

const recentSessions = [
  {
    id: "1",
    mentor: "Emily Johnson",
    mentorAvatar: "/creative-woman.png",
    date: "Dec 10, 2024",
    topic: "Design Portfolio Review",
    rating: 5,
    feedback: "Excellent session! Emily provided great insights on improving my portfolio.",
  },
  {
    id: "2",
    mentor: "David Park",
    mentorAvatar: "/confident-businessman.png",
    date: "Dec 5, 2024",
    topic: "Career Transition Planning",
    rating: 5,
    feedback: "Very helpful guidance on transitioning into venture capital.",
  },
]

export function MenteeDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Continue your learning journey</p>
        </div>
        <Link href="/mentors">
          <Button className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Find New Mentors
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold">18h</p>
                <p className="text-sm text-muted-foreground">Learning Hours</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Star className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-muted-foreground">Active Mentors</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="flex items-center gap-4 p-4 border rounded-lg">
                <Avatar>
                  <AvatarImage src={session.mentorAvatar || "/placeholder.svg"} alt={session.mentor} />
                  <AvatarFallback>
                    {session.mentor
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{session.mentor}</h4>
                  <p className="text-sm text-muted-foreground">{session.topic}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>{session.date}</span>
                    <span>{session.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {session.type}
                    </Badge>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Join
                </Button>
              </div>
            ))}
            {upcomingSessions.length === 0 && (
              <p className="text-center text-muted-foreground py-8">
                No upcoming sessions.{" "}
                <Link href="/mentors" className="text-primary hover:underline">
                  Book a session
                </Link>
              </p>
            )}
          </CardContent>
        </Card>

        {/* Recent Sessions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Recent Sessions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentSessions.map((session) => (
              <div key={session.id} className="p-4 border rounded-lg">
                <div className="flex items-start gap-4">
                  <Avatar>
                    <AvatarImage src={session.mentorAvatar || "/placeholder.svg"} alt={session.mentor} />
                    <AvatarFallback>
                      {session.mentor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{session.mentor}</h4>
                      <div className="flex">
                        {[...Array(session.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{session.topic}</p>
                    <p className="text-xs text-muted-foreground mt-1">{session.date}</p>
                    <p className="text-sm mt-2">{session.feedback}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
