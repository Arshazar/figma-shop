import React from 'react'
import { ContextsProvider } from '../src/providers/Provider'

import '../src/styles/main.scss'

function MyApp({ Component, pageProps }) {
    return (
        <ContextsProvider>
            <Component {...pageProps} />
        </ContextsProvider>
    )
}

export default MyApp
