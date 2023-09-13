import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/Store.js";
import './index.css'
import axios from "axios"
axios.defaults.baseURL="http://localhost:4322/"
//axios.defaults.baseURL="https://backend-pf-production-ba15.up.railway.app/"

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
