function Playlist(){
    return(
        <nav className="mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-10">
            <ul>
                {new Array(7).fill(
                    <li>
                    <a href="#" className="cursor-default text-sm text-link hover:text-white flex h-8 items-center ">
                        My Playlist #4
                    </a>
                </li>
                )}
            </ul>
        </nav>
    )
}

export default Playlist;