import { Icon } from "Icons";
function DownloadApp(){
    return(
        <div className="h-10 flex items-center px-6 text-link hover:text-white text-sm cursor-pointer">
            <span className="h-10 flex items-center w-5 mr-4 mt-1 ">
                <Icon name="download" />
            </span>
            Install App
        </div>
    )
}

export default DownloadApp;