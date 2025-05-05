import GetStarted from '@/features/auth/pages/GetStarted'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-center">
      <GetStarted />
    </div>
  )
}