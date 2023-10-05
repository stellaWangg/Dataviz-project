import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import QuizPage from "./pages/QuizPage";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";
function App() {
  return (
    <div id="main-container">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/maps/" element={<MapPage />}></Route>
        <Route path="/quiz" element={<QuizPage />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
