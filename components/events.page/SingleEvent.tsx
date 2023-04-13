import React from 'react'

import { AllEvent } from '@/interfaces/events.interface'

export const SingleEvent = (event: AllEvent) => {
    return (
        <>
            <div className="mb-4 mt-7 md:mb-0 w-full mx-auto relative">
                <div className="px-4 lg:px-0">
                    <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                        {event.title}
                    </h2>
                    <a
                        href="#"
                        className="py-2 text-gray-700 inline-flex items-center justify-center mb-2"
                    >
                        {event.city.toUpperCase()}
                    </a>
                </div>

                <img src={`${event.image}`} className="w-full object-cover lg:rounded aspect-video" style={{ height: '28em' }} />
            </div>
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                <p className="pb-6">{event.description}</p>
            </div>
            <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Registered people</h2>
            {
                event.emails_registered.map((em) => (
                    <span key={em} className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-3 py-0.5 mt-7 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">{em}</span>
                ))
            }
        </>
    )
}
