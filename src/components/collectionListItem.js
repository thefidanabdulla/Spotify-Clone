import { Icon } from "Icons";

function CollectionListItem({ item, key }) {
    
    return (
        <div key={key} className='bg-footer cursor-pointer group rounded-md w-[11.5rem] p-4'>
            <div className="mb-4 relative h-[9.5rem] bg-musicColor rounded-sm">
                <div className="text-link font-bold">
                    <Icon name={'musicLibrary'} />
                </div>
                <button
                    className={`w-10 h-10 bg-primary rounded-full absolute bottom-2 right-2 hidden hover:flex group-hover:flex items-center justify-center`}>
                    <Icon name={ 'play'} />
                </button>
            </div>

            <h6 className="truncate text-ellipsis whitespace-nowrap text-base font-semibold">
                My Playlist #4
            </h6>
            <p className="overflow-hidden text-nowrap text-ellipsis whitespace-normal  h-10 text text-sm text-link">
                By Fidan Abdulla
            </p>
        </div>
    )
}

export default CollectionListItem;