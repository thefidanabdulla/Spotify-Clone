import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";
import {useLocation } from 'react-router-dom';
import Search from "./Navbar/Search";

function Navbar(){
    
    const searchRoute = useLocation();
    return(
        <div className="h-[3.75rem] flex items-center justify-between px-8">
            <Navigation />
            {
                (searchRoute.pathname === '/search') && <Search />
            }
            {/* <Routes>
                <Route path="/" element={'Home'} />
                <Route path="/search" element={'Search'} />
                <Route path="/collection" element={'Collection'} />
            </Routes> */}
            <Auth />
        </div>
    )
}

export default Navbar;