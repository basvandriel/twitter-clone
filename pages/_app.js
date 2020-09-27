// import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

import { MailboxIcon } from '../components/icons';

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


      <footer className='flex items-center border-t'>
        {/* Icons here */}

        <a className='flex justify-center w-1/4 py-4' href='#'>
          <MailboxIcon className='w-6 h-6' />
        </a>
        <a className='flex justify-center w-1/4 py-4' href='#'>
          <MailboxIcon className='w-6 h-6' />
        </a>
        <a className='flex justify-center w-1/4 py-4' href='#'>
          <MailboxIcon className='w-6 h-6' />
        </a>
        <a className='flex justify-center w-1/4 py-4' href='#'>
          <MailboxIcon className='w-6 h-6' />
        </a>
      </footer>


    </div>
  )
}

export default MyApp
