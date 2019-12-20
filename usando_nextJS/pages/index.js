import React from 'react'
import Link from "next/link"
import Head from "next/head"
import withAnalytics from "../src/hocs/withAnalytics"

const Home = () => {
    return (
        <div>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <h1>Page Home</h1>
            <div>
                <img src="/static/guaxinim.jpeg" alt="guaxinim" />
                <img src="/static/panda.jpeg" alt="panda" />
            </div>
            <Link href='/users'>
                <a>Page Users</a>
            </Link>
        </div>
    )
}

export default withAnalytics()(Home)