import React from "react";
import BaseLayout from "../../Components/BaseLayout";
import imgProfile from "/images/defaultProfile.png";
import "./styles/Account.css";

export default function Account() {
  return (
    <BaseLayout>
      <div className="account-container">
        <div className="acc-content">
          <div className="profile-details">
            <div className="profile-image">
              <img src={imgProfile} alt="" />
            </div>
            <h1 className="title">Nombre completo</h1>
            <p>SpootChat</p>
          </div>
          <div className="infoProfile">
            <h1 className="titleProfile">Tu perfil</h1>
            <div className="profile-info">
              <div className="info-columns">
                <div className="column">
                  <div className="info-label">Usuario</div>
                  <div className="info-label">Nombre</div>
                  <div className="info-label">E-mail</div>
                </div>
                <div className="column">
                  <div className="info-value">Juan</div>
                  <div className="info-value">Juan Perez</div>
                  <div className="info-value">juanperez@gmail.com</div>
                </div>
              </div>

              <div className="button-container">
                <button className="formbutton-resetPass">
                  <span>Cambiar contraseña</span>
                </button>
                <button className="formbutton-editInfo">
                  <span>Editar información</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
