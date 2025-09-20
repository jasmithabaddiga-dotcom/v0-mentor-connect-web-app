import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">Ready to Elevate Your Career?</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Join thousands of professionals who are already growing with expert mentorship
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Join Now</Button>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/find-mentor">Find a Mentor</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/become-mentor">Become a Mentor</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
