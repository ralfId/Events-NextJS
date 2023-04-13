import React from 'react'
import Head from 'next/head'

import { NavBar } from './NavBar'
import { Footer } from './Footer'

interface layout {
    children: any,
    title?: string
}

const Layout = ({ children, title }: layout) => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <Head>
                <title>{title || "Events"}</title>
            </Head>
            <NavBar />
            <main className='mx-5'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout