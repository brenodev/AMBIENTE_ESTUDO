import React from 'react'
import Link from "next/link"

const Home = () => {
    return (
        <div>
            <h1>Page Home</h1>
            <Link href='/users'>
                <a>Page Users</a>
            </Link>
        </div>
    )
}

export default Home