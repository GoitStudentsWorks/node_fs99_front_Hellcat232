import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
import Modal from "react-modal";
import { GoogleOAuthProvider } from "@react-oauth/google";

Modal.setAppElement(document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <BrowserRouter basename='/node_fs99_front_Hellcat232'>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
