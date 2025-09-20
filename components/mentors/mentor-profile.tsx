"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, MapPin, Clock, Calendar, MessageCircle } from "lucide-react"

interface MentorProfileProps {
  mentorId: string
}

// Mock mentor data - in real app, this would be fetched based on mentorId
const mentor = {
  id: "1",
  name: "Sarah Chen",
  title: "Senior Product Manager",
  company: "Google",
  location: "San Francisco, CA",
  industry: "Technology",
  experience: "8 years",
  rating: 4.9,
  sessions: 127,
  price: 150,
  avatar: "/professional-woman-diverse.png",
  skills: ["Product Strategy", "User Research", "Agile", "Leadership", "Data Analysis", "A/B Testing"],
  bio: "I'm a Senior Product Manager at Google with 8 years of experience building consumer and enterprise products. I'm passionate about helping others navigate their tech careers, whether you're looking to break into product management, advance to senior roles, or transition from other fields. I've mentored 100+ professionals and love sharing insights on product strategy, user research, and leadership.",
  experience_details: [
    { company: "Google", role: "Senior Product Manager", duration: "2021 - Present" },
    { company: "Facebook", role: "Product Manager", duration: "2019 - 2021" },
    { company: "Uber", role: "Associate Product Manager", duration: "2017 - 2019" },
  ],
  education: [
    { school: "Stanford University", degree: "MBA", year: "2017" },
    { school: "UC Berkeley", degree: "BS Computer Science", year: "2015" },
  ],
  reviews: [
    {
      name: "Alex Johnson",
      rating: 5,
      comment:
        "Sarah provided incredible insights into product strategy. Her guidance helped me land my dream PM role!",
      date: "2 weeks ago",
    },
    {
      name: "Maria Garcia",
      rating: 5,
      comment: "Excellent mentor! Sarah's experience and advice were exactly what I needed for my career transition.",
      date: "1 month ago",
    },
  ],
}

export function MentorProfile({ mentorId }: MentorProfileProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <Card>
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <Avatar className="h-32 w-32 mx-auto md:mx-0">
              <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
              <AvatarFallback className="text-2xl">
                {mentor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
              <p className="text-xl text-muted-foreground mb-2">{mentor.title}</p>
              <p className="text-lg text-muted-foreground mb-4">{mentor.company}</p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{mentor.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>
                    {mentor.rating} ({mentor.sessions} sessions)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{mentor.experience} experience</span>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                {mentor.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <Button size="lg" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Book Session - ${mentor.price}
                </Button>
                <Button variant="outline" size="lg" className="flex items-center gap-2 bg-transparent">
                  <MessageCircle className="h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* About Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">About</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Experience</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          {mentor.experience_details.map((exp, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{exp.role}</h3>
                <p className="text-muted-foreground">{exp.company}</p>
              </div>
              <span className="text-sm text-muted-foreground">{exp.duration}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Reviews Section */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-semibold">Reviews</h2>
        </CardHeader>
        <CardContent className="space-y-6">
          {mentor.reviews.map((review, index) => (
            <div key={index} className="border-b last:border-b-0 pb-4 last:pb-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">{review.name}</span>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
              <p className="text-muted-foreground">{review.comment}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
