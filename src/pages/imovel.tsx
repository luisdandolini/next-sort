import Head from 'next/head'
import Footer from '../../components/Footer'
import ImovelUnico from '../../components/Imovel/ImovelUnico'
import Menu from '../../components/Menu'

export default function Imovel() {
  return(
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <ImovelUnico />
      </main>
      {/* <Footer /> */}
    </>
  )
}