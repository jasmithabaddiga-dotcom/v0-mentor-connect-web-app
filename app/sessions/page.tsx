import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SessionsManager } from "@/components/sessions/sessions-manager"

export default function SessionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <SessionsManager />
        </div>
      </main>
      <Footer />
    </div>
  )
}
