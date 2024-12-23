import { Button, Field, Fieldset, Input, Label } from "@headlessui/react";
import React, { useState } from "react";

import { useNavigate } from "react-router";
import useRegister from "../hooks/useRegister";

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleRegister, loading, error } = useRegister();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = handleRegister({ email, password });
        if (result) {
            navigate('/login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Fieldset>
                <Field>
                    <Label
                        className="block font-medium text-sm text-violet-700"
                        htmlFor="email"
                    >
                        Email
                    </Label>
                    <Input
                        className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Field>

                <Field className="mt-4">
                    <Label
                        className="block font-medium text-sm text-violet-700"
                        htmlFor="password"
                    >
                        Password
                    </Label>
                    <Input
                        className="rounded-md shadow-md shadow-violet-200 block mt-1 w-full py-2 px-3"
                        id="password"
                        type="password"
                        name="password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Field>


                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}

                <div className="flex mt-4">
                    <Button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-violet-800 border border-transparent rounded-md font-semibold text-sm text-white tracking-widest hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:border-violet-900 focus:ring focus:ring-violet-300 disabled:opacity-25 transition"
                    >
                        Register
                    </Button>
                </div>
            </Fieldset>
        </form>
    );
};

export default RegisterForm;
