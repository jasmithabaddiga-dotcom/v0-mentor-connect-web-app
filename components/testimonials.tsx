import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      company: "Tech Startup",
      content:
        "My mentor helped me transition from junior to senior developer in just 8 months. The personalized guidance was invaluable.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "Marketing Manager",
      company: "Fortune 500",
      content:
        "The strategic insights I gained from my mentor completely transformed my approach to campaign management.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Designer",
      company: "Design Agency",
      content: "Having a mentor who understood the design industry helped me build confidence and land my dream job.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">What Our Users Say</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Real stories from mentees who transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
