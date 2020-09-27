import Link from './link';
import { HomeIcon, SearchIcon, BellIcon, MailboxIcon } from '../components/icons';


const Navigation = () => {
    return (
        <footer className='flex items-center border-t border-gray-200 text-gray-600'>
            <Link href='/'>
                <a className='flex justify-center w-1/4 py-4'>
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
    );
}

export default Navigation;