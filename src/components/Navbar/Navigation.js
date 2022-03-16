import { Icon } from "Icons";
import {useNavigate} from 'react-router-dom'



function Navigation(){
    const navigate = useNavigate()
    return(
        <nav className="flex items-center gap-x-4">
            <button onClick={() => navigate(-1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon name="prev" />
            </button>
            <button onClick={() => navigate(1)} className="w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70">
                <Icon name="next" />
            </button>
        </nav>
    )
}

export default Navigation;