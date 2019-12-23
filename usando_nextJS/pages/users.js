import React from 'react';
import axios from "axios"
import Link from "next/link"
import Head from "next/head"
import withAnalytics from "~/hocs/withAnalytics"

const Users = ({ users }) => {
    return (
        <div>
            <Head>
                <title>
                    Usuários
                </title>
            </Head>
            <ul>
                {
                    users.map(user => (
                        <li key={user.id}>
                            {user.login}
                        <Link href={`/users/${user.login}`}><a>Ver perfil</a></Link>
                        </li>
                    ))
                }
            </ul>
            <Link href='/'>
                <a>Voltar para Home Page</a>
            </Link>
        </div>
    )
};

Users.getInitialProps = async () => {
    const response = await axios.get(
        'https://api.github.com/users'
    )
    console.log(response.data)
    return { users: response.data };

}

export default withAnalytics()(Users);
