import { Events, EventsCategory } from '@/interfaces/events.interface'
import Link from 'next/link'
import React from 'react'
import { LeftSide } from './LeftSide';
import { RightSide } from './RightSide';

export const HomePage = (events: Events) => {
    const { events_categories } = events;
    return (
        <>
            <section className="mb-7 bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')] bg-gray-500 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Some events around the world.</h1>

                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>

            <div className="container my-24 px-6 mx-auto">
                <section className="mb-32 text-gray-800">
                    {
                        events_categories?.map((event, i) => {
                            return (i % 2 === 0)
                                ?
                                <LeftSide {...event} key={event.id} /> : <RightSide {...event} key={event.id} />
                        })
                    }
                </section>
            </div>
        </>
    )
}
