import { Icon } from "Icons"
import { useDispatch, useSelector } from "react-redux"
import { setSidebar } from "stores/player";


function SidebarCover(){
    const dispatch = useDispatch();
    const current = useSelector(state => state.player.current)

    return(
        <div className="pt-[100%] relative bg-black group">
            <img src={current.image} className='w-full h-full absolute top-0 left-0' alt='song cover' />
            <button onClick={() => dispatch(setSidebar(false))} className="w-6 h-6 bg-black opacity-0 rounded-full -rotate-90 hover:scale-[1.06] hover:!opacity-100 group-hover:opacity-80 absolute top-1.5 right-1.5 flex items-center justify-center">
                <Icon name='arrowLeft' size={16} />
            </button>
        </div>
    )
}
export default SidebarCover