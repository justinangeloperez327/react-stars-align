import { LoginForm } from '../features/authentication'
import React from 'react'

const LoginPage = () => {
    return (
        <main className="w-full sm:max-w-md mt-6 ">
            <div className="fade-up px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <LoginForm />
            </div>
        </main>
    )
}

export default LoginPage