"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Star, DollarSign, Users, MessageCircle, Settings } from "lucide-react"

const upcomingSessions = [
  {
    id: "1",
    mentee: "Alex Johnson",
    menteeAvatar: "/placeholder.svg?key=mentee1",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    topic: "Product Strategy Review",
    type: "Video Call",
    earnings: 150,
  },
  {
    id: "2",
    mentee: "Maria Garcia",
    menteeAvatar: "/placeholder.svg?key=mentee2",
    date: "Dec 18, 2024",
    time: "10:00 AM",
    topic: "Career Transition Planning",
    type: "Video Call",
    earnings: 150,
  },
]

const recentSessions = [
  {
    id: "1",
    mentee: "John Smith",
    menteeAvatar: "/placeholder.svg?key=mentee3",
    date: "Dec 10, 2024",
    topic: "Engineering Leadership",
    rating: 5,
    feedback: "Sarah provided excellent guidance on scaling engineering teams.",
    earnings: 150,
  },
  {
    id: "2",
    mentee: "Lisa Chen",
    menteeAvatar: "/placeholder.svg?key=mentee4",
    date: "Dec 5, 2024",
    topic: "Product Management Basics",
    rating: 5,
    feedback: "Great insights into product strategy and user research methods.",
    earnings: 150,
  },
]

export function MentorDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Manage your mentoring sessions and profile</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2 bg-transparent">
            <Settings className="h-4 w-4" />
            Profile Settings
          </Button>
          <Button className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Manage Availability
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">127</p>
                <p className="text-sm text-muted-foreground">Total Sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">$19,050</p>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Star className="h-6 w-6 text-accent" />
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
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">190h</p>
                <p className="text-sm text-muted-foreground">Mentoring Hours</p>
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
                  <AvatarImage src={session.menteeAvatar || "/placeholder.svg"} alt={session.mentee} />
                  <AvatarFallback>
                    {session.mentee
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold">{session.mentee}</h4>
                  <p className="text-sm text-muted-foreground">{session.topic}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span>{session.date}</span>
                    <span>{session.time}</span>
                    <Badge variant="outline" className="text-xs">
                      {session.type}
                    </Badge>
                    <span className="text-green-600 font-medium">${session.earnings}</span>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Join
                </Button>
              </div>
            ))}
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
                    <AvatarImage src={session.menteeAvatar || "/placeholder.svg"} alt={session.mentee} />
                    <AvatarFallback>
                      {session.mentee
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{session.mentee}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(session.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-green-600 font-medium text-sm">${session.earnings}</span>
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

      {/* Earnings Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Earnings Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">$1,200</p>
              <p className="text-sm text-muted-foreground">This Month</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$450</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$750</p>
              <p className="text-sm text-muted-foreground">Available</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
