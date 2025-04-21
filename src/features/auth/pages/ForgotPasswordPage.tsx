import FormBuilder from "@/components/app/FormBuilder";
import { forgotPasswordFields } from "../fields/forgotPasswordFields";
import { Link } from "@tanstack/react-router";
import lottieForgotPassword from "@/assets/lottie/forgotPass.json";
import AuthWrapper from "../wrapper/authWrapper";
import Lottie from "lottie-react";

export const ForgotPasswordPage = () => {
    return (
        <AuthWrapper header="Forgot Password?">
            <Lottie animationData={lottieForgotPassword} loop={true}/>
            <FormBuilder
                fields={forgotPasswordFields}
                onSubmit={(data) => console.log(data)}
                submitLabel="Reset Password"
                footer={
                    <div className="py-5 text-center text-sm">
                        Remembered your password?{' '}
                        <Link to="/login" className="text-primary hover:underline">
                            Log in
                        </Link>
                    </div>
                }
            />
        </AuthWrapper>
    );
};