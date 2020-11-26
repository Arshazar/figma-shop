import Head from 'next/head'
import { Background, MoreItems, Header, BestSellers } from '../src/components'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Figma Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <Background />
                <Header />
                <div className="items-container">
                    <BestSellers />
                    <MoreItems />
                </div>
            </main>
        </div>
    )
}
