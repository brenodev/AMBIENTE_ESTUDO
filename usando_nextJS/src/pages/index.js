import React from 'react'
import Link from "next/link"
import Head from "next/head"

const Home = () => {
    return (
        <div>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <h1>Page Home</h1>
            <Link href='/users'>
                <a>Page Users</a>
            </Link>
        </div>
    )
}

export default Home