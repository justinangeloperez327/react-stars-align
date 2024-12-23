import { Link } from "react-router";
import React from "react";
import { RegisterForm } from "../features/authentication";

const RegisterPage = () => {
    return (
        <>
            <div className="w-full sm:max-w-md mt-5">
                <div className="flex justify-end">
                    <Link
                        to="/register-employer"
                        className="fade-up text-md font-bold text-white underline"
                    >
                        Are you an employer?
                    </Link>
                </div>
            </div>
            <div className="fade-up w-full sm:max-w-lg mt-2 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Register</h2>
                </div>
                <RegisterForm />
            </div>
        </>
    );
};

export default RegisterPage;
