import { ForgotPasswordPage } from '@/features/auth/pages/ForgotPasswordPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forgot-password')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='animate-gradient bg-gradient-to-br from-indigo-300 via-pink-100 to-rose-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 min-h-screen'>
          <ForgotPasswordPage />
        </div>
  )
}
