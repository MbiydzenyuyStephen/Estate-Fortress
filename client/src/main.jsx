import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-pcbdo6ss2utklq1c.us.auth0.com"
      clientId="WnHHdzoO9BN6XiatO2WlEVYqZKxYrrw7"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/"
      }}
      audience ="http://localhost:5273"
      scope="openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
