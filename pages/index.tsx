import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import { Events } from '@/interfaces/events.interface'
import { GetServerSideProps } from 'next'
import { HomePage } from '@/components/home.page'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }: any) {
  return (
    <HomePage {...data} />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const eventData: Events = await import('../data/events-data.json');


  return {
    props: {
      title: "Countries events",
      data: JSON.parse(JSON.stringify(eventData))
    }
  }
}
