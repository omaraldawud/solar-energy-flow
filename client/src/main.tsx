import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/assets/css/index.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetProvider } from "react-helmet-async";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <App />
    </HelmetProvider>  
);
