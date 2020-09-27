// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import Navigation from '../components/navigation';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col bg-gray h-screen'>
      <header className='flex items-center p-4 border-b'>
        <img
          className='w-8 h-8 mr-4 rounded-full'
          src="me.jpg"
        />
        <p className='font-semibold'>{Component.title}</p>
      </header>

      <main className='flex-1'>
        <Component {...pageProps} />
      </main>


      <Navigation />
    </div >
  )
}

export default MyApp
