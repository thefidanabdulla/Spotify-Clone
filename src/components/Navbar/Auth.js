import { Menu } from '@headlessui/react'
import { Icon } from 'Icons';
function Auth() {
    const user = {
        name: 'Fidan Abdulla',
        avatar: 'https://i.pinimg.com/originals/c7/81/e8/c781e85fedc1741cb784e26dccd69027.jpg'
    }
    return (
        <Menu as={'nav'} className={'relative z-10'}>
            {({open} ) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2  ${ open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
                        <img src={user.avatar} className='w-7 h-7 rounded-full m-px mr-2 ml-1' alt='profile' />
                        <span className='text-sm font-semibold mr-2'>{user.name}</span>
                        <span className={open ? 'rotate-180' : 'rotate-0'}>
                            <Icon name="downDir" />
                        </span>
                    </Menu.Button>
                    <Menu.Items className={'absolute top-full translate-y-2 right-0 p-1 w-48 bg-active rounded'}>
                        <Menu.Item >
                            {({ active }) => (
                                <a
                                    className={`transition-colors h-10 flex justify-between items-center px-2 rounded-[2px] text-sm cursor-default  ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Account 
                                    <Icon name='external' />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item >
                            {({ active }) => (
                                <a
                                    className={`transition-colors h-10 flex items-center px-2 rounded-[2px] text-sm cursor-default  ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Profile 
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item >
                            {({ active }) => (
                                <a
                                    className={`transition-colors h-10 flex items-center px-2 rounded-[2px] text-sm cursor-default  ${active && 'bg-white bg-opacity-10'}`}
                                    href="#"
                                >
                                    Log Out 
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>
    )
}

export default Auth;