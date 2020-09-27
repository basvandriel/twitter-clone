import Head from 'next/head';

function Home() {
  return (
    <div>
      <Head>
        <title>Twitter clone</title>
      </Head>

      Hello
    </div>
  )
}

Home.title = 'Latest tweets';

export default Home;