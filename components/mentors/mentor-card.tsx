import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock } from "lucide-react"
import Link from "next/link"

interface Mentor {
  id: string
  name: string
  title: string
  company: string
  industry: string
  experience: string
  rating: number
  sessions: number
  price: number
  avatar: string
  skills: string[]
  bio: string
}

interface MentorCardProps {
  mentor: Mentor
}

export function MentorCard({ mentor }: MentorCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
            <AvatarFallback>
              {mentor.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg leading-tight">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground">{mentor.title}</p>
            <p className="text-sm text-muted-foreground">{mentor.company}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{mentor.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{mentor.sessions} sessions</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">{mentor.bio}</p>

        <div className="flex flex-wrap gap-1">
          {mentor.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {mentor.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{mentor.skills.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-lg font-semibold">${mentor.price}/session</div>
          <Link href={`/mentors/${mentor.id}`}>
            <Button size="sm">View Profile</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
