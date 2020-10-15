import Head from 'next/head'
import Calculator from '../src/components/calculator'
import '../src/styles/_global.scss'

const Home = () => (
  <div className="container">
    <Head>
      <title>My Calculator</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Calculator />
  </div>
)

export default Home
