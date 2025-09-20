import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Users, GraduationCap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Create your profile and tell us about your goals, interests, and what you're looking to achieve.",
    },
    {
      icon: Users,
      title: "Match with a Mentor",
      description: "Browse our network of expert mentors and find the perfect match based on your industry and needs.",
    },
    {
      icon: GraduationCap,
      title: "Start Learning",
      description:
        "Schedule sessions, get personalized guidance, and accelerate your career growth with expert insights.",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">How It Works</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Get started with mentorship in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground text-pretty">{step.description}</p>
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-bold">
                  {index + 1}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
