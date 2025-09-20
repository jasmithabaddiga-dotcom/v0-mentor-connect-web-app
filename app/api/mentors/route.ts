import { NextResponse } from "next/server"

// Mock mentor data - in production this would come from database
const mentors = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Product Manager",
    company: "Google",
    industry: "Technology",
    experience: "8 years",
    rating: 4.9,
    sessions: 127,
    price: 150,
    avatar: "/professional-woman-diverse.png",
    skills: ["Product Strategy", "User Research", "Agile", "Leadership"],
    bio: "Experienced PM helping others navigate tech careers and product management challenges.",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    title: "VP of Engineering",
    company: "Stripe",
    industry: "Technology",
    experience: "12 years",
    rating: 4.8,
    sessions: 89,
    price: 200,
    avatar: "/professional-man.png",
    skills: ["Engineering Leadership", "System Design", "Team Building", "Scaling"],
    bio: "Engineering leader passionate about mentoring the next generation of tech professionals.",
  },
  {
    id: "3",
    name: "Emily Johnson",
    title: "Creative Director",
    company: "IDEO",
    industry: "Design",
    experience: "10 years",
    rating: 4.9,
    sessions: 156,
    price: 120,
    avatar: "/creative-woman.png",
    skills: ["Design Thinking", "Creative Strategy", "Team Leadership", "Innovation"],
    bio: "Award-winning designer helping creatives build impactful careers and develop their craft.",
  },
  {
    id: "4",
    name: "David Park",
    title: "Investment Director",
    company: "Sequoia Capital",
    industry: "Finance",
    experience: "15 years",
    rating: 4.7,
    sessions: 73,
    price: 300,
    avatar: "/confident-businessman.png",
    skills: ["Venture Capital", "Financial Analysis", "Due Diligence", "Portfolio Management"],
    bio: "VC professional guiding entrepreneurs and finance professionals in their career growth.",
  },
  {
    id: "5",
    name: "Lisa Thompson",
    title: "Head of Marketing",
    company: "HubSpot",
    industry: "Marketing",
    experience: "9 years",
    rating: 4.8,
    sessions: 112,
    price: 130,
    avatar: "/marketing-professional.png",
    skills: ["Digital Marketing", "Growth Strategy", "Content Marketing", "Analytics"],
    bio: "Marketing leader specializing in growth strategies and building high-performing teams.",
  },
  {
    id: "6",
    name: "James Wilson",
    title: "Chief Technology Officer",
    company: "Airbnb",
    industry: "Technology",
    experience: "16 years",
    rating: 4.9,
    sessions: 94,
    price: 250,
    avatar: "/tech-executive.png",
    skills: ["Technical Leadership", "Architecture", "Innovation", "Strategic Planning"],
    bio: "Tech executive with deep experience in scaling engineering organizations and products.",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const industry = searchParams.get("industry")
  const experience = searchParams.get("experience")
  const search = searchParams.get("search")

  let filteredMentors = mentors

  if (industry) {
    filteredMentors = filteredMentors.filter((mentor) => mentor.industry.toLowerCase() === industry.toLowerCase())
  }

  if (search) {
    filteredMentors = filteredMentors.filter(
      (mentor) =>
        mentor.name.toLowerCase().includes(search.toLowerCase()) ||
        mentor.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase())) ||
        mentor.company.toLowerCase().includes(search.toLowerCase()),
    )
  }

  return NextResponse.json(filteredMentors)
}
