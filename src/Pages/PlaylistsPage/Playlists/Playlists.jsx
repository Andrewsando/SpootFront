import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { getPlaylists } from "../../../Redux/Actions/Playlists"
import PcardsContainer from './Pcardscontainer'

const Playlists= ()=>{
  
const dispatch= useDispatch()
const Playlists= useSelector((state)=>state.generalPlaylists)
const PlaylistsData= Playlists.result

const [currentData, setCurrentData]=useState([])
useEffect(()=>{
dispatch(getPlaylists())
}, [dispatch])

useEffect(()=>{
  setCurrentData(PlaylistsData)
},[PlaylistsData])

    return (
<div>
   <div>
    <button>
     Atrás
    </button>
   </div>
   <div>
     <PcardsContainer data={currentData}/>
   </div>
</div>
    )
}

export default Playlists

