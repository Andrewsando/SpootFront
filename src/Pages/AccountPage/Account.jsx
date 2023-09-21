import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BaseLayout from "../../Components/BaseLayout";
import imgProfile from "/images/defaultProfile.png";

import "./styles/Account.css";

export default function Account({ user }) {
  const Login = useSelector((state) => state.UserLogins);
  const userData = useSelector((state) => state.UserData);
  return (
    <BaseLayout>
      <div className="account-container">
        <div className="acc-content">
          <div className="profile-details">
            <div className="profile-image">
              <img style={{borderRadius: '50%'}} src={user && user.photoURL &&( user.photoURL) } alt="" />
            </div>
            <h1 className="title">{user && user.displayName &&( user.displayName) }</h1>
            <p>SpootChat</p>
          </div>
          <div className="infoProfile">
            <h1 className="titleProfile">Tu perfil</h1>
            <div className="profile-info">
              <div className="info-columns">
                <div className="column">
                  {/* <div className="info-label">Usuario</div> */}
                  <div className="info-label">Nombre</div>
                  <div className="info-label">E-mail</div>
                </div>
                <div className="column">
                  {/* <div className="info-value">Juan</div> */}
                  <div className="info-value">{user && user.displayName &&( user.displayName) }</div>
                  <div className="info-value">{user && user.email && ( user.email ) }</div>
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
