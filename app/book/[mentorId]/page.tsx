import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking/booking-form"

export default function BookingPage({ params }: { params: { mentorId: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <BookingForm mentorId={params.mentorId} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
