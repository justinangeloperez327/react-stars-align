// filepath: /d:/Projects/mern/job-board-platform/frontend/src/features/authentication/components/RegisterEmployerForm.jsx

import { Button, Field, Fieldset, Input, Label, Legend, Textarea } from '@headlessui/react';
import React, { useState } from 'react';

import { useNavigate } from 'react-router';
import useRegisterEmployer from '../hooks/useRegisterEmployer';

const RegisterEmployerForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [size, setSize] = useState('');
    const [industry, setIndustry] = useState('');
    const [location, setLocation] = useState('');
    const [vision, setVision] = useState('');
    const [mission, setMission] = useState('');
    const [values, setValues] = useState('');
    const { handleRegister, loading, error } = useRegisterEmployer();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await handleRegister({
            email,
            password,
            companyName,
            size,
            industry,
            location,
            vision,
            mission,
            values,
        });
        if (result) {
            navigate('/login');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Fieldset>
                <Field>
                    <Label className="block font-medium text-sm text-gray-700" htmlFor="email">
                        Email *
                    </Label>
                    <Input
                        className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                        id="email"
                        type="email"
                        name="email"
                        required
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter your email'
                        disabled={loading}
                    />
                </Field>

                <Field className="mt-4">
                    <Label className="block font-medium text-sm text-gray-700" htmlFor="password">
                        Password *
                    </Label>
                    <Input
                        className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                        id="password"
                        type="password"
                        name="password"
                        required
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter your password'
                        disabled={loading}
                    />
                </Field>
                {/* divider */}
                <div className="border-b border-gray-300 my-3"></div>
                <div className="flex flex-wrap -mx-2">
                    <Field className="w-full md:w-1/2 px-2">
                        <Label className="block font-medium text-sm text-gray-700" htmlFor="company-name">
                            Company Name *
                        </Label>
                        <Legend className="text-xs text-gray-500">This will be your company name</Legend>
                        <Input
                            className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3"
                            id="company-name"
                            type="text"
                            name="company-name"
                            required
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            placeholder="e.g., Tech Solutions Inc."
                            disabled={loading}
                        />

                    </Field>

                    <Field className="w-full md:w-1/2 px-2">
                        <Label className="block font-medium text-sm text-gray-700" htmlFor="size">
                            Size *
                        </Label>
                        <Legend className="text-xs text-gray-500">This will be your company size</Legend>
                        <Input
                            className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3"
                            id="size"
                            type="number"
                            name="size"
                            required
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder="e.g., 50"
                            disabled={loading}
                        />

                    </Field>
                </div>

                <div className="flex flex-wrap -mx-2">
                    <Field className="mt-4 w-full md:w-1/2 px-2">
                        <Label className="block font-medium text-sm text-gray-700" htmlFor="industry">
                            Industry *
                        </Label>
                        <Legend className="text-xs text-gray-500">This will be your company industry</Legend>
                        <Input
                            className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                            id="industry"
                            type="text"
                            name="industry"
                            required
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                            placeholder="e.g., Information Technology"
                            disabled={loading}
                        />
                    </Field>

                    <Field className="mt-4 w-full md:w-1/2 px-2">
                        <Label className="block font-medium text-sm text-gray-700" htmlFor="location">
                            Location *
                        </Label>
                        <Legend className="text-xs text-gray-500">This will be your company location</Legend>
                        <Input
                            className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                            id="location"
                            type="text"
                            name="location"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="e.g., New York, NY"
                            disabled={loading}
                        />

                    </Field>
                </div>

                <Field className="mt-4">
                    <Label className="block font-medium text-sm text-gray-700" htmlFor="vision">
                        Vision
                    </Label>
                    <Legend className="text-xs text-gray-500">This will be your company vision</Legend>
                    <Textarea
                        className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                        id="vision"
                        type="text"
                        name="vision"
                        value={vision}
                        onChange={(e) => setVision(e.target.value)}
                        placeholder="e.g., To be the leading tech company"
                        disabled={loading}
                    />

                </Field>

                <Field className="mt-4">
                    <Label className="block font-medium text-sm text-gray-700" htmlFor="mission">
                        Mission
                    </Label>
                    <Legend className="text-xs text-gray-500">This will be your company mission</Legend>
                    <Textarea
                        className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                        id="mission"
                        type="text"
                        name="mission"
                        value={mission}
                        onChange={(e) => setMission(e.target.value)}
                        placeholder="e.g., To innovate and inspire"
                        disabled={loading}
                    />

                </Field>

                <Field className="mt-4">
                    <Label className="block font-medium text-sm text-gray-700" htmlFor="values">
                        Values
                    </Label>
                    <Legend className="text-xs text-gray-500">This will be your company values</Legend>
                    <Textarea
                        className="rounded-md shadow-sm shadow-gray-400 block mt-2 w-full py-2 px-3 mb-1"
                        id="values"
                        type="text"
                        name="values"
                        value={values}
                        onChange={(e) => setValues(e.target.value)}
                        placeholder="e.g., Integrity, Innovation, Excellence"
                        disabled={loading}
                    />

                </Field>

                {error && <p className="text-red-500">{error}</p>}
                <div className="flex mt-4">
                    <Button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-3 bg-violet-800 border border-transparent rounded-md font-semibold text-sm text-white tracking-widest hover:bg-violet-700 active:bg-violet-900 focus:outline-none focus:border-violet-900 focus:ring focus:ring-violet-300 disabled:opacity-25 transition"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Register"}
                    </Button>
                </div>
            </Fieldset>
        </form>
    );
};

export default RegisterEmployerForm;