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
            <h1 className="title">Tu perfil</h1>
            <div className="profile-info">
              <div className="info-columns">
                <div className="column">
                  <div className="info-label">Nombre de usuario</div>
                  <div className="info-label">Nombre completo</div>
                  <div className="info-label">Correo electrónico</div>
                </div>
                <div className="column">
                  <div className="info-value">Nombre</div>
                  <div className="info-value">Nombre completo</div>
                  <div className="info-value">example@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
