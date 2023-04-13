import React from 'react'
import { GetStaticProps } from 'next'

import { SingleEvent } from '@/components/events.page/SingleEvent'
import { AllEvent, Events } from '@/interfaces/events.interface'
import { RegisterEvent } from '@/components/events.page/RegisterEvent'

const eventPage = ({ data }: any) => {

  const event: AllEvent = data[0];

  return (
    <>
      <SingleEvent {...event} />
      <RegisterEvent/>
    </>
  )
}

export default eventPage

export const getStaticPaths = async () => {
  const events: Events = require('../../../data/events-data.json');

  const paths = events.allEvents?.map((path) => {
    return {
      params: {
        country: path.city,
        id: path.id
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const eventId = context?.params?.id;
  const events: Events = require('../../../data/events-data.json');
  const data = events?.allEvents?.filter((ev) => ev.id === eventId);
  return {
    props: {
      data
    }
  }
}