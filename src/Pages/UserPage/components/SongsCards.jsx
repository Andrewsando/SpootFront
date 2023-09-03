import SongCard from "./SongCard";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongAll } from "../../../Redux/Actions/Songs";

export default function SongsCards (){
 const dispatch = useDispatch()
 const allSongs= useSelector((state)=>state.generalSongs)

useEffect(()=>{
    dispatch(getSongAll())
}, [])
    return(
        <div className="bg-neutral-900">
            {console.log(allSongs)}
            <h1 className="text-white mt-16 font-bold ml-8 text-2xl mb-2 p-8">Canciones del momento</h1>
            <div  className="flex justify-evenly overflow-hidden p-12 flex-wrap flex-row gap-12 sm:gap-24 md:gap-2 bg-neutral-900 mt-12 px-6 md:px-20 ">
            {allSongs.result && allSongs.result.map((song)=>(
                <SongCard key={song.image} img={song.image} name={song.name} info={song.description} artist={song.artist}/>
           ))}
            </div>
        </div>
    )
}