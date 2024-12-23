import { Button, Field, Fieldset, Input, Label } from '@headlessui/react'

import clsx from 'clsx';
import useLogin from '../hooks/useLogin';
import { useState } from 'react'

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { handleLogin, loading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleLogin({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Fieldset>
                <Field>
                    <Label
                        className="block font-medium text-sm/6 text-black text-left"
                        htmlFor="email"
                    >
                        Email
                    </Label>
                    <Input
                        className="rounded-md shadow-md shadow-gray-300 block mt-2 w-full py-2 px-3 mb-1"
                        id="email"
                        type="email"
                        name="email"
                        autoFocus
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading}
                    />
                </Field>

                <Field className="mt-4">
                    <Label
                        className="block font-medium text-sm/6 text-black text-left"
                        htmlFor="password"
                    >
                        Password
                    </Label>
                    <Input
                        className="rounded-md shadow-md shadow-gray-300 block mt-2 w-full py-2 px-3 mb-1"
                        id="password"
                        type="password"
                        name="password"
                        autoComplete="password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        disabled={loading}
                    />
                </Field>

                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500 mt-2">{error}</p>}

                <div className="flex items-center justify-end mt-4">
                    <Button
                        type="submit"
                        className={clsx(
                            "inline-flex items-center px-4 py-2 bg-violet-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest",
                            "hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition ml-4"
                        )}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </Button>
                </div>
            </Fieldset>
        </form>
    )
}

export default LoginForm