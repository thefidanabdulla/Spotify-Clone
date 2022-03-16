import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Navbar from "./Navbar";
import Home from 'views/Home';
import Search from 'views/Search';
import Collection from 'views/Collection';
function Content(){
    return(
        <main className="flex-auto overflow-auto">
            <Navbar />
            <div className='px-8 py-5'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/collection" element={<Collection />} />
                </Routes>
            </div>
        </main>
    )
}

export default Content;