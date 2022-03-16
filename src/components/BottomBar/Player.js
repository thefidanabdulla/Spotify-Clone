import { Icon } from "Icons";
import { Range, getTrackBackground } from "react-range";
import { useEffect, useMemo } from 'react';
import { useAudio } from 'react-use';
import { secondsToTime } from 'utils';
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";

function Player() {
    const {current, sidebar} = useSelector(state => state.player)
    const STEP = 0.1;
    const MIN = 0;

    const [audio, state, controls, ref] = useAudio({
        src: current?.src
    });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setControls(controls))
    }, []) 
    useEffect(() => {
        controls.play()
    }, [current])
    useEffect(() => {
        dispatch(setPlaying(state.playing))
    }, [state.playing])
    const  volumeIcon  = useMemo(() => {
        if(state.volume === 0 || state.muted === true)
            return 'volumeMuted'
        if(state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if(state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        return 'volumeFull'
    }, [state.volume, state.muted])
    return (
        <div className="flex justify-between px-4 items-center h-full">
            <div className="min-w-[11.25rem] w-[30%]">
                {
                    current &&
                    <div className="flex items-center g-5">
                        <div className="flex items-center">
                            { !sidebar && (<div className="w-14 h-14 mr-3 group flex-shrink-0 relative">
                                <img src={current?.image} alt="song banner" />
                                <button onClick={() => dispatch(setSidebar(true))} className="w-6 h-6 bg-black opacity-0 rounded-full rotate-90 hover:scale-[1.06] hover:!opacity-100 group-hover:opacity-60 absolute top-1.5 right-1.5 flex items-center justify-center">
                                <Icon name='arrowLeft' size={16} />
                                </button>
                            </div>
                            )}  
                            <div>
                                <h6 className="text-sm text-ellipsis">{current.title}</h6>
                                <p className="text-[0.688rem] text-white text-opacity-70 text-ellipsis"> {current?.artist} </p>
                            </div>
                        </div>
                        <button className="w-8 h-8  flex items-center justify-center text-white opacity-70 hover:opacity-100">
                            <Icon name='heart' />    
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                            <Icon name='pictureInPicture' />    
                        </button>
                    </div>
                }
            </div>
            <div className="max-w-[45.125rem] pt-2 w-[40%] flex px-4 flex-col items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                        <Icon name='shuffle' />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                        <Icon name={'playerPrev'} />
                    </button>
                    <button onClick={controls[state?.playing ? 'pause' : 'play']} className="w-8 h-8 flex items-center justify-center  bg-white rounded-full hover:scale-105 ">
                        <Icon name={state?.playing ? 'pause' : 'play'} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                        <Icon name={'playerNext'} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                        <Icon name={'repeat'} />
                    </button>
                </div>
                <div className="w-full mt-1.5 flex items-center gap-x-2">
                    {audio}
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <Range
                        values={[state?.time]}
                        step={STEP}
                        min={MIN}
                        max={state?.duration || 1}
                        onChange={(values) => controls.seek(values[0])}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                className="w-full h-7 flex"
                                style={props.style}
                            >
                                <div
                                    ref={props.ref}
                                    className="h-1 group w-full rounded-md self-center"
                                    style={{
                                        background: getTrackBackground({
                                            values: [state?.time],
                                            colors: ["#1db954", "#535353"],
                                            min: MIN,
                                            max: state?.duration || 1
                                        }),
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                className={`w-3 h-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''}  group-hover:opacity-100`}
                                style={{
                                    ...props.style,
                                    boxShadow: "0px 2px 4px 0 rgb( 0 0 0 / 50%)"
                                }}
                            />
                        )}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                    <Icon name='lyrics' />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                    <Icon name='queue' />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                    <Icon name='device' />
                </button>
                <button 
                    onClick={controls[state?.muted ? 'unmute' : 'mute']}
                    className="w-8 h-8 flex items-center justify-center text-white opacity-70 hover:opacity-100">
                    <Icon name={volumeIcon} />
                </button>
                <div className="w-[5.813rem]">
                    <Range
                        values={[state?.muted ? 0 : state?.volume]}
                        step={0.01}
                        min={MIN}
                        max={1}
                        onChange={(values) =>{
                            controls.unmute()
                            controls.volume(values[0])
                        }}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                className="w-full h-7 flex"
                                style={props.style}
                            >
                                <div
                                    ref={props.ref}
                                    className="h-1 group w-full rounded-md self-center"
                                    style={{
                                        background: getTrackBackground({
                                            values: [state?.muted ? 0 : state?.volume],
                                            colors: ["#1db954", "#535353"],
                                            min: MIN,
                                            max: 1
                                        }),
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                className={`w-3 h-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''}  group-hover:opacity-100`}
                                style={{
                                    ...props.style,
                                    boxShadow: "0px 2px 4px 0 rgb( 0 0 0 / 50%)"
                                }}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    )
}
export default Player;