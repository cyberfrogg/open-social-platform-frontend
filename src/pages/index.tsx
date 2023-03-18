import Head from 'next/head'
import { MainPageLayout } from '../layouts/mainpage/MainPageLayout'

export default function Home() {
    return (
        <>
            <Head>
                <title>Test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="pagecontainer">
                <MainPageLayout title={"Home"}>
                    text
                </MainPageLayout>
            </div>
        </>
    )
}
