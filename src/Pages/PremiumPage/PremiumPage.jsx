import BaseLayout from "../../Components/BaseLayout"
import FirstSection from "./FisrtSection"
import SecondPage from "./SecondPage"
import { ThirdSection } from "./ThirdSection"
import { getUserId } from "../../Redux/Actions/Users"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

export default function PremiumPage (){
    const dispatch= useDispatch()
    const id= useSelector((state)=>state.UserData)
    
    
    useEffect(()=>{
        dispatch(getUserId(id.id))
    },[dispatch, id.id])
    
    return(
        <BaseLayout>
        <FirstSection/>
        <SecondPage/>
        <ThirdSection/>
        </BaseLayout>
    )
}