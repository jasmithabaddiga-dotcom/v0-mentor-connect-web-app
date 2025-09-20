"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video, MessageCircle, Star, CheckCircle, XCircle } from "lucide-react"

const upcomingSessions = [
  {
    id: "1",
    mentor: "Sarah Chen",
    mentorAvatar: "/professional-woman-diverse.png",
    date: "Dec 15, 2024",
    time: "2:00 PM",
    topic: "Product Strategy Review",
    type: "Video Call",
    status: "confirmed",
    meetingLink: "https://meet.google.com/abc-defg-hij",
  },
  {
    id: "2",
    mentor: "Michael Rodriguez",
    mentorAvatar: "/professional-man.png",
    date: "Dec 18, 2024",
    time: "10:00 AM",
    topic: "Engineering Leadership",
    type: "Video Call",
    status: "pending",
    meetingLink: null,
  },
]

const pastSessions = [
  {
    id: "1",
    mentor: "Emily Johnson",
    mentorAvatar: "/creative-woman.png",
    date: "Dec 10, 2024",
    time: "3:00 PM",
    topic: "Design Portfolio Review",
    type: "Video Call",
    status: "completed",
    rating: 5,
    feedback: "Excellent session! Emily provided great insights on improving my portfolio.",
  },
  {
    id: "2",
    mentor: "David Park",
    mentorAvatar: "/confident-businessman.png",
    date: "Dec 5, 2024",
    time: "1:00 PM",
    topic: "Career Transition Planning",
    type: "Phone Call",
    status: "completed",
    rating: 5,
    feedback: "Very helpful guidance on transitioning into venture capital.",
  },
]

export function SessionsManager() {
  const [activeTab, setActiveTab] = useState("upcoming")

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Confirmed
          </Badge>
        )
      case "pending":
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        )
      case "completed":
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            Completed
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Cancelled
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Sessions</h1>
        <p className="text-muted-foreground">Manage your mentoring sessions</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="past">Past Sessions</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingSessions.map((session) => (
            <Card key={session.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={session.mentorAvatar || "/placeholder.svg"} alt={session.mentor} />
                    <AvatarFallback>
                      {session.mentor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{session.mentor}</h3>
                        <p className="text-muted-foreground">{session.topic}</p>
                      </div>
                      {getStatusBadge(session.status)}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {session.type === "Video Call" ? (
                          <Video className="h-4 w-4" />
                        ) : (
                          <MessageCircle className="h-4 w-4" />
                        )}
                        <span>{session.type}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {session.status === "confirmed" && session.meetingLink && (
                        <Button size="sm">
                          <Video className="h-4 w-4 mr-1" />
                          Join Meeting
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message Mentor
                      </Button>
                      <Button variant="outline" size="sm">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {upcomingSessions.length === 0 && (
            <Card>
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-semibold mb-2">No upcoming sessions</h3>
                <p className="text-muted-foreground mb-4">Book a session with a mentor to get started</p>
                <Button onClick={() => (window.location.href = "/mentors")}>Find Mentors</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          {pastSessions.map((session) => (
            <Card key={session.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={session.mentorAvatar || "/placeholder.svg"} alt={session.mentor} />
                    <AvatarFallback>
                      {session.mentor
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{session.mentor}</h3>
                        <p className="text-muted-foreground">{session.topic}</p>
                      </div>
                      {getStatusBadge(session.status)}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{session.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {session.type === "Video Call" ? (
                          <Video className="h-4 w-4" />
                        ) : (
                          <MessageCircle className="h-4 w-4" />
                        )}
                        <span>{session.type}</span>
                      </div>
                      {session.rating && (
                        <div className="flex items-center gap-1">
                          <div className="flex">
                            {[...Array(session.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {session.feedback && (
                      <div className="bg-muted p-3 rounded-lg mb-4">
                        <p className="text-sm">{session.feedback}</p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Book Again
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        Message Mentor
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
