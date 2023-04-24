import Head from 'next/head'
import HeaderGalpao from '../../components/Galpoes/HeaderGalpao'
import About from '../../components/Galpoes/About'
import Footer from '../../components/Footer'


export default function Galpoes() {
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <HeaderGalpao />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}