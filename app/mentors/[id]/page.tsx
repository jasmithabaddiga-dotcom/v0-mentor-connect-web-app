import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MentorProfile } from "@/components/mentors/mentor-profile"

export default function MentorProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <MentorProfile mentorId={params.id} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
