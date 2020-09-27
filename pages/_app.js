// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

import { HomeIcon, SearchIcon, BellIcon, MailboxIcon } from '../components/icons';

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col bg-gray h-screen'>
      <header className='flex items-center p-4 border-b'>
        <img
          className='w-8 h-8 mr-4 rounded-full'
          src="me.jpg"
        />
        <p className='font-semibold'>Latest tweets</p>
      </header>

      <main className='flex-1'>
        <Component {...pageProps} />
      </main>


      <footer className='flex items-center border-t border-gray-200 text-gray-600'>
        <Link href='/'>
          <a className='text-purple-600 flex justify-center w-1/4 py-4'>
            <HomeIcon className='w-6 h-6' />
          </a>
        </Link>

        <Link href='/explore'>
          <a className='flex justify-center w-1/4 py-4'>
            <SearchIcon className='w-6 h-6' />
          </a>
        </Link>


        <Link href='/notifications'>
          <a className='flex justify-center w-1/4 py-4'>
            <BellIcon className='w-6 h-6' />
          </a>
        </Link>

        <Link href='/messages'>
          <a className='flex justify-center w-1/4 py-4'>
            <MailboxIcon className='w-6 h-6' />
          </a>
        </Link>
      </footer>
    </div >
  )
}

export default MyApp
