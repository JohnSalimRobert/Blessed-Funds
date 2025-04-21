import FormBuilder from "@/components/app/FormBuilder"
import { loginFields } from "../fields/loginFields"
import { Link } from "@tanstack/react-router"
import AuthWrapper from "../wrapper/authWrapper"

export const LoginPage = () => {
    return (
        <AuthWrapper header="Log in">
            <FormBuilder
                fields={loginFields}
                onSubmit={(data) => console.log(data)}
                submitLabel="Log in"
                footer={
                    <div className="py-5 text-center text-sm">
                        <Link to="/forgot-password" className="text-primary hover:underline block mb-2">
                            Forgot password?
                        </Link>
                        Don’t have an account?{' '}
                        <Link to="/signup" className="text-accent text-rose-800 font-medium hover:underline">
                            Sign up
                        </Link>
                    </div>
                }
            />
        </AuthWrapper>
    )
}