import React, { Component } from 'react'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import ReactGA from 'react-ga';

export default () => Composed =>
    class extends Component {
        static getInitialProps(ctx) {
            return loadGetInitialProps(Composed, ctx)
        }
        componentDidMount() {
            console.log('PAGE VIEW')

            ReactGA.initialize('UA-000000-01');
            ReactGA.pageview(window.location.pathname + window.location.search);
        }

        render() {
            return (
                <Composed {...this.props} />
            )
        }
    }