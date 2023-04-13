import React from 'react'
import Link from 'next/link'

import { countryProps } from '@/pages/events/[country]'

export const CountryEvents = ({ countryId, data }: countryProps) => {
    return (
        <>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {
                    data.map((ev) => (
                        <Link href={`/events/${countryId}/${ev.id}`} key={ev.id}>
                            <div className="rounded overflow-hidden shadow-lg">
                                <img className="w-full aspect-square" src={ev.image} alt="" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{ev.title}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
