import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MentorSearch } from "@/components/mentors/mentor-search"
import { MentorGrid } from "@/components/mentors/mentor-grid"

export default function MentorsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Perfect Mentor</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with experienced professionals who can guide your career journey
            </p>
          </div>
          <MentorSearch />
          <MentorGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
