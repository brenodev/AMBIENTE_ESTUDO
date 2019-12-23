import React from 'react'
import Link from "next/link"
import Head from "next/head"
import withAnalytics from "~/hocs/withAnalytics"
import styled from "styled-components";

const Title = styled.h1`
    color: #069;
    font-size: 40px;
    text-align: center;
`;

const Home = () => {
    return (
        <div>
            <Head>
                <title>
                    Home
                </title>
            </Head>
            <Title>Page Home</Title>
            <div>
                <img src="/static/guaxinim.jpeg" alt="guaxinim" width="200" height="150"/>
                <img src="/static/panda.jpeg" alt="panda" width="200" height="150"/>
            </div>
            <Link href='/users'>
                <a>Page Users</a>
            </Link>
        </div>
    )
}

export default withAnalytics()(Home)