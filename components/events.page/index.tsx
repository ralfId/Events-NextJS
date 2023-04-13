import React from 'react'
import Link from 'next/link'

import { EventsCategory } from '@/interfaces/events.interface'

interface indexEvetsProps {
    data: EventsCategory[],
    title?: string
}
export const IndexEvents = ({ data, title }: indexEvetsProps) => {
    return (
        <>
            <h2 className="text-4xl font-bold dark:text-white my-11">{title}</h2>

            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {
                        data.map(event => (
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <Link href={`/events/${event.id}`} key={event.id}>

                                    <article className="overflow-hidden rounded-lg shadow-lg">
                                        <img className="h-48 w-full object-cover"
                                            src={event.image}
                                            alt={event.title}
                                        />

                                        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                            <h6 className="my-3 pl-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{event.title}</h6>
                                        </header>


                                    </article>

                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
