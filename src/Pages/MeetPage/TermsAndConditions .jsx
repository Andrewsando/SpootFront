import BaseLayout from "../../Components/BaseLayout";
import "./styles/MeetPage.css";

export default function TermsAndConditions() {
  return (
    <BaseLayout>
      <div className="container-TermsAndConditionsPage">
        <div className="container-introduction introduction">
          <h1>Términos y Condiciones</h1>
          <p>/</p>
        </div>

        <div className="container-dataBlocks">
          <div className="container-aboutMe">
            <div className="text-aboutMe">
              <h2>1. Aceptación de los Términos y Condiciones</h2>
              <p>
                Al acceder y utilizar SpootChat ("el Sitio"), aceptas estar legalmente vinculado por estos Términos y Condiciones. Si no estás de acuerdo con estos términos, por favor no utilices el Sitio.
              </p>
            </div>
            <div className="text-aboutMe">
              <h2>2. Uso del Sitio</h2>
              <p>
                2.1. El Sitio está destinado para uso personal y no comercial. No puedes utilizar el Sitio con fines comerciales sin previa autorización.
              </p>
              <p>
                2.2. Debes ser mayor de 13 años para utilizar el Sitio. Si eres menor de 13 años, debes obtener el consentimiento de tus padres o tutores antes de utilizar el Sitio.
              </p>
            </div>
            <div className="text-aboutMe">
              <h2>3. Contenido del Sitio</h2>
              <p>
                3.1. Todo el contenido, incluyendo pero no limitándose a música, texto, imágenes, videos y gráficos, en el Sitio está protegido por derechos de autor y otros derechos de propiedad intelectual. No puedes copiar, distribuir, transmitir, mostrar, vender o reproducir dicho contenido sin el permiso previo y por escrito de [Nombre de tu empresa] o los propietarios de los derechos de autor correspondientes.
              </p>
              <p>
                3.2. [Nombre de tu empresa] no asume responsabilidad por el contenido proporcionado por terceros o enlaces a sitios web de terceros.
              </p>
            </div>
            <div className="text-aboutMe">
              <h2>4. Privacidad</h2>
              <p>
                4.1. [Nombre de tu empresa] recopila y utiliza información personal de acuerdo con su Política de Privacidad, que puedes revisar [enlace a la Política de Privacidad].
              </p>
            </div>
            <div className="text-aboutMe">
              <h2>5. Limitación de Responsabilidad</h2>
              <p>
                5.1. [Nombre de tu empresa] no se hace responsable de ningún daño directo o indirecto que pueda resultar del uso del Sitio.
              </p>
            </div>
            <div className="text-aboutMe">
              <h2>6. Modificaciones a los Términos y Condiciones</h2>
              <p>
                6.1. [Nombre de tu empresa] se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigencia al ser publicadas en el Sitio. Se recomienda revisar periódicamente estos términos para estar al tanto de cualquier cambio.
              </p>
            </div>
            <div className="text-aboutMe">
              <h2>7. Ley Aplicable</h2>
              <p>
                7.1. Estos Términos y Condiciones se rigen por las leyes del [tu país] y cualquier disputa relacionada con ellos se resolverá en los tribunales de [tu ciudad].
              </p>
            </div>
            <div className="text-aboutMe">
              <p>
                Al utilizar el Sitio, aceptas cumplir con estos Términos y Condiciones. Si no estás de acuerdo con estos términos, por favor no utilices el Sitio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
