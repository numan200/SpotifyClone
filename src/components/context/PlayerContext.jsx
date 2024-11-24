import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) =>{

    
    const audioRef = useRef();
    const seekbg = useRef();
    const seekbar = useRef();
    const [track, setTrack] = useState(songsData[0]);
    const [playStatus, setPlayStatus] = useState(false);
    const [time, setTime] = useState({
        currentTime:{
            seconds:0,
            minutes:0
        },
        totalTime:{
            seconds:0,
            minutes:0
        },
    });
    const [loopStatus, setLoopStatus] = useState(false);

    const play =() => {
        audioRef.current.play();
        setPlayStatus(true);
    };

    const pause =() => {
        audioRef.current.pause();
        setPlayStatus(false);
    };

    const playwithId = async (id) => {
        await setTrack(songsData[id]);
        await audioRef.current.play();
        await setPlayStatus(true);
    };

    const previous = async (id) => {
        if(track.id >0){
            await setTrack(songsData[track.id-1]);
            await audioRef.current.play();
            await setPlayStatus(true);
        }
    };

    const next = async (id) => {
        if(track.id < songsData.length-1){
            await setTrack(songsData[track.id+1]);
            await audioRef.current.play();
            await setPlayStatus(true);
        }
    };

    const seeksong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX /seekbg.current.offsetWidth)*audioRef.current.duration)
    };

    const shuffle = async () => { 
        const randomId = Math.floor(Math.random() * songsData.length);
         await setTrack(songsData[randomId]); 
         await audioRef.current.play(); 
         await setPlayStatus(true); };
          
    const toggleLoop = () => { setLoopStatus(!loopStatus); };
    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekbar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"; 
                setTime({
                    currentTime: {
                        seconds: Math.floor(audioRef.current.currentTime % 60),
                        minutes: Math.floor(audioRef.current.currentTime / 60)
                    },
                    totalTime: {
                        seconds: Math.floor(audioRef.current.duration % 60),
                        minutes: Math.floor(audioRef.current.duration / 60)
                    }
                })
            }
        }, 1000);
    }, [audioRef])
    
    
    

    const contextValue={
        audioRef,
        seekbg,
        seekbar,
        track,setTrack,
        playStatus, setPlayStatus,
        time,setTime,
        play,pause,
        playwithId,
        previous,next,
        seeksong,
        shuffle,
        loopStatus,toggleLoop

    }

    return(
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;