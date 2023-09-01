import BaseLayout from "../../Components/BaseLayout";
import "./styles/MeetPage.css";

export default function PrivacyPolicy() {
  return (
    <BaseLayout>
      <div className="container-AboutPage">
        <div className="container-introduction introduction">
          {/* <hr className="line"/> */}
          <h1>Políticas de Privacidad</h1>
          <p>Reglamento General (UE) Sobre Protección de Datos.</p>
        </div>

        <div className="container-dataBlocks">
          <div className="container-aboutMe">
            <div className="text-aboutMe">
              <h1>titulo</h1>
              <p>
                Parrafos
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
