import { Icon } from "Icons";
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'
import { setCurrent } from "stores/player";

function SongItem({ item }) {
    const dispatch = useDispatch();
    const { current, playing, controls } = useSelector(state => state.player)
    const imageStyle = item => {
        if(item.type === 'artist'){
            return 'rounded-full'
        }else if(item.type === 'podcast'){
            return 'rounded-xl'
        }else if(item.type === 'album'){
            return 'rounded'
        }else{
            return 'rounded'
        }
    }
    const updateCurrent = () => {
        if(current?.id === item.id){
            if(playing) {
                controls.pause();
            }else{
                controls.play();
            }
        }else{
            dispatch(setCurrent(item))
        }
    }
    const isCurrentItem = (current?.id === item.id &&  playing) 
    return (
        <NavLink
            key={item.id}
            to='/'
            className={'group bg-footer hover:bg-active p-4 rounded w-[11.4375rem]'}
        >

            <div className="mb-4 relative">
                <img src={item.image} className={`w-[9.5rem] h-[9.5rem] ${imageStyle(item)}`} alt="music poster" />
                <button onClick={updateCurrent} 
                    className={`w-10 h-10 bg-primary rounded-full absolute bottom-2 right-2 ${!isCurrentItem ? 'hidden' : ''} flex group-hover:flex items-center justify-center`}>
                    <Icon name={isCurrentItem ? 'pause' : 'play'} />
                </button>
            </div>

            <h6 className="truncate text-ellipsis whitespace-nowrap text-base font-semibold">
                {item.title}
            </h6>
            <p className="overflow-hidden text-nowrap text-ellipsis whitespace-normal  h-10 text text-sm text-link">
                {item.description}
            </p>
        </NavLink>
    )
}

export default SongItem;