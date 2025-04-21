import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from "@/features/auth/pages/LoginPage";

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <div className='animate-gradient bg-gradient-to-br from-indigo-300 via-pink-100 to-rose-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 min-h-screen'>
      <LoginPage />
    </div>
    );
}
