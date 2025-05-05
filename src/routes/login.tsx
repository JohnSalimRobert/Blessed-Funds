import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from "@/features/auth/pages/LoginPage";

export const Route = createFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-center'>
      <LoginPage />
    </div>
    );
}
