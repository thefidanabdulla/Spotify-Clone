import { Icon } from "Icons";

function Search(){
    return(
        <div className="mr-auto ml-4 relative">
            <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
                <Icon name={'search'} />
            </label>
            <input autoFocus={true} className="h-10 w-[22.74rem] pl-12 text-black outline-none max-w-full bg-white rounded-3xl font-semibold placeholder-opacity-50 text-sm  placeholder-black" id="search-input" placeholder="Artists, songs, or podcasts" type='text' />
        </div>
    )
}
export default Search;