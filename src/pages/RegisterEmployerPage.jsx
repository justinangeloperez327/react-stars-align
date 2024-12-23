import { Link } from "react-router";
import React from "react";
import { RegisterEmployerForm } from "../features/authentication";

const RegisterEmployerPage = () => {
    return (
        <>
            <div className="w-full sm:max-w-xl mt-5">
                <div className="flex justify-end">
                    <Link
                        to="/register"
                        className="fade-up text-md font-bold text-white underline"
                    >
                        Are you an employee?
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center w-full ">
                <div className="fade-up  w-full max-w-3xl mt-2">
                    <div className="px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-semibold text-gray-800">Employer Registration</h2>
                        </div>
                        <RegisterEmployerForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterEmployerPage;
