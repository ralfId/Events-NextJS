import React from 'react'
import { GetStaticProps } from 'next'

import { CountryEvents } from '@/components/events.page/CountryEvents'
import { AllEvent, Events } from '@/interfaces/events.interface'

export interface countryProps {
    countryId: string,
    data: AllEvent[]
}
const countryEventPage = (countryEvents: countryProps) => {

    return (
        <>
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                Events in {countryEvents.countryId}
            </h2>
            <CountryEvents {...countryEvents} />
        </ >
    )
}

export default countryEventPage

export const getStaticPaths = async () => {

    const eventData: Events = await import('../../../data/events-data.json');

    const paths = eventData?.events_categories?.map((e) => {
        return { params: { country: e.id } }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const eventData: Events = await import('../../../data/events-data.json');
    const countryId = context?.params?.country
    const data = eventData?.allEvents?.filter((e) => e.city === countryId)

    return {
        props: {
            countryId,
            data
        }
    }
}