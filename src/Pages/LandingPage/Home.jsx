import "../../styles/Home.css";
import BaseLayout from "./components/BaseLayout";
import EntryLanding from "./sections/EntryLanding";
import SongCarousel from "./sections/SongCarousel";
import Featured from "./sections/Featured";
import Testimonials from "./sections/Testimonials";
import OurPlans from "./sections/OurPlans";
import FAQs from "./sections/FAQs";

export default function Home() {
  return (
    <BaseLayout>
      <div className="container-landing">
        <EntryLanding />
        <SongCarousel />
        <Featured />
        <Testimonials/>
        <OurPlans />
        <FAQs />
      </div>
    </BaseLayout>
  );
}
