import Layout from '@/components/Layout'
import { IndexEvents } from '@/components/events.page'
import { Events, EventsCategory } from '@/interfaces/events.interface'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const eventsPage = (props: any) => {

    return (
        <IndexEvents {...props} />
    )
}

export default eventsPage

export async function getServerSideProps() {

    const eventData: Events = await import('../../data/events-data.json');
    // // Here we can fetch data from our Api or backend
    // const response = await fetch("url");
    // const data = await response.json()

    return {
        props: {
            title: "Countries events",
            data: eventData.events_categories
        }
    }
}

