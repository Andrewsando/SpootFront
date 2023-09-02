import EntryLanding from "./sections/EntryLanding";
import SliderMusic from "./sections/SliderMusic";
import Featured from "./sections/Featured";
import FAQs from "./sections/FAQs";
import BaseLayout from "./components/BaseLayout";
import SliderPhrases from "./sections/SliderPhrases";
import OurPlans from "./sections/OurPlans";
import "../../styles/Home.css";

export default function Home() {
  return (
    <BaseLayout>
      <div className="container-landing">
        <EntryLanding />
        <SliderMusic />
        <Featured />
        <SliderPhrases />
        <OurPlans />
        <FAQs />
      </div>
    </BaseLayout>
  );
}
