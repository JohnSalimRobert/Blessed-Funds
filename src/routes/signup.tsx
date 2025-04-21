import { SignupPage } from '@/features/auth/pages/SignupPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/signup')({
  component: Signup,
})

function Signup() {
  return (
        <div className='animate-gradient bg-gradient-to-br from-indigo-300 via-pink-100 to-rose-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 min-h-screen'>
          <SignupPage />
        </div>
  )
}
