import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-foreground">MentorConnect</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/mentors" className="text-muted-foreground hover:text-foreground transition-colors">
              Find Mentors
            </Link>
            <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link href="/sessions" className="text-muted-foreground hover:text-foreground transition-colors">
              My Sessions
            </Link>
            <Link href="/login" className="text-muted-foreground hover:text-foreground transition-colors">
              Login
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" asChild className="hidden sm:inline-flex bg-transparent">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/mentors">Find Mentors</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
