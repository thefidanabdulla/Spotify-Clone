import Menu from './Sidebar/Menu'
import Logo from './../img/logo.svg'
import { Icon } from 'Icons'
import {NavLink} from 'react-router-dom'
import Playlist from './Sidebar/Playlist'
import DownloadApp from './Sidebar/DownloadApp'
import { useSelector } from 'react-redux'
import SidebarCover from './Sidebar/SidebarCover'
function Sidebar(){

    const sidebar = useSelector(state => state.player.sidebar)

    return(
        <aside className="w-60 pt-6 flex-shrink-0 flex flex-col bg-black">

            <NavLink to={'/'}>
                <img src={Logo} className='h-10 mb-6 px-6'  alt='logo'/>
            </NavLink>

           <Menu />

            <nav className='mt-6 px-2'>
                <ul>
                    <li >
                        <a href='#' className='group text-sm font-semibold px-4 py-2 h-10 flex items-center text-link hover:text-white'>
                            <span className='flex items-center justify-center bg-[#B2B2B2] group-hover:bg-white  mr-4 rounded-[1px] h-6 w-6'>
                                <Icon name="plus" />
                            </span>
                            Create Playlist
                        </a>
                    </li>
                    <li >
                        <a href='#' className=' group text-sm font-semibold px-4 py-2 h-10 flex items-center text-link hover:text-white'>
                            <span className='flex items-center justify-center rounded-[1px] bg-gradient-to-br text-white from-purple-900 to-blue-300 opacity-70 group-hover:opacity-100 mr-4 h-6 w-6'>
                                <Icon name="heartFilled" />
                            </span>
                            Liked Songs
                        </a>
                    </li>
                </ul>
            </nav>
            <Playlist />
            <DownloadApp />
            {
                sidebar && <SidebarCover />
            }
        </aside>
    )
}

export default Sidebar;