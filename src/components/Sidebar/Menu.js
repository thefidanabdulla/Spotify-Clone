import  {Icon} from 'Icons'
import {NavLink} from 'react-router-dom'
function Menu(){
    let normalStyle = 'h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4'
    let activeStyle = 'text-white h-10 flex gap-x-4 items-center text-sm font-semibold hover:text-white px-4'
    return(
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink  to="/" className={({isActive}) => isActive ? activeStyle : normalStyle }>
                        <span>
                            <Icon name="home" />
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/search"  className={({isActive}) => isActive ? activeStyle : normalStyle }>
                        <span>
                            <Icon name="search" />
                        </span>
                        Search
                    </NavLink>
                </li>
                <li>
                    <NavLink  to="/collection"  className={({isActive}) => isActive ? activeStyle : normalStyle }>
                        <span>
                            <Icon name="collection" />
                        </span>
                        Your Library
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;