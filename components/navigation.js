import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, SearchIcon, BellIcon, MailboxIcon } from '../components/icons';

const menu = [
    {
        url: '/', icon: HomeIcon
    },
    {
        url: '/explore', icon: SearchIcon
    },
    {
        url: '/notifications', icon: BellIcon
    },
    {
        url: '/messages', icon: MailboxIcon
    }
];

const Navigation = () => {
    const router = useRouter();

    let classNames = 'flex justify-center w-1/4 py-4';
    let activeClassName = ' text-purple-600';

    return (
        <footer className='flex items-center border-t border-gray-200 text-gray-600'>
            {menu.map((item, index) => (
                <Link href={item.url} key={index}>
                    <a className={classNames + (router.pathname === item.url ? activeClassName : '')}>
                        <item.icon className='w-6 h-6' empty={router.pathname !== item.url} />
                    </a>
                </Link>
            ))}
        </footer >
    );
};

export default Navigation;