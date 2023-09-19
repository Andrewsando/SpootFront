import BaseLayout from "../../Components/BaseLayout"
import FirstSection from "./FisrtSection"
import SecondPage from "./SecondPage"
import { ThirdSection } from "./ThirdSection"

export default function PremiumPage (){

    return(
        <BaseLayout>
        <FirstSection/>
        <SecondPage/>
        <ThirdSection/>
        </BaseLayout>
    )
}