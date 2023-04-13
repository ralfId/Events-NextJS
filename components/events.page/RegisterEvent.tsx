import { useRouter } from 'next/router';
import React, { FormEvent, useRef, useState } from 'react'
import { ErrorMessage } from '../messages/ErrorMessage';
import { SuccessMessage } from '../messages/SuccessMessage';

export const RegisterEvent = () => {

    const [message, setMessage] = useState('')

    const emailInputRef = useRef<any>();
    const router = useRouter();

    const matchEmail = (value: string) => {
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (value.match(mailformat)) ? true : false;
    }

    const onSubmit = async (ev: FormEvent) => {
        ev.preventDefault();
        setMessage('');
        const emailValue: string = emailInputRef.current?.value;

        if (!emailValue) {
            setMessage("Please enter an email!")
        }
        if (!matchEmail(emailValue)) {
            setMessage('Email has invalid format!')
        }

        const evetentId = router?.query.id;
        await fetchRegister(evetentId as string, emailValue);
    }

    const fetchRegister = async (eventId: string, email: string) => {
        try {
            const response = await fetch('/api/eventRegistration', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ eventId, email })
            });

            const data = await response.json();
            if (!response.ok) throw new Error(`Error: ${response.status}, ${response.statusText}, ${data.message}`);

            setMessage(data.message)

        } catch (error) {
            setMessage((error as Error).message)
        }

    }
    return (
        <>
            <section className="bg-white dark:bg-gray-900 mt-7">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Register for this event</h2>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-8"
                    >
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input ref={emailInputRef} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@domain.com" required />
                        </div>
                        {
                            (message.length > 0) &&

                                (message.includes('Error'))
                                ? <ErrorMessage message={message} />
                                : <SuccessMessage message={message} />


                        }

                        <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}
