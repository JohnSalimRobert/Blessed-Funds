import FormBuilder from "@/components/app/FormBuilder";
import { Link } from "@tanstack/react-router";
import AuthWrapper from "../wrapper/authWrapper";
import { signupFields } from "../fields/signupFields";

export const SignupPage = () => {
    return (
        <AuthWrapper header="Sign up">
            <FormBuilder
                fields={signupFields}
                onSubmit={(data) => console.log(data)}
                submitLabel="Sign up"
                footer={
                    <div className="py-5 text-center text-sm">
                        Already have an account?{" "}
                        <Link to="/login" className="text-accent text-rose-800 font-medium hover:underline">
                            Log in
                        </Link>
                    </div>
                }
            />
        </AuthWrapper>
    );
};