
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SEOProvider } from './components/SEOContext';
import LandingPage from "./pages/LandingPagge";


export default function App() {
  return (
    <SEOProvider>
      <LandingPage />
    </SEOProvider>
  );
}