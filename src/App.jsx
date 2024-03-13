import "./App.css";
import Footer from "./assets/footer/footer";
import Frontview from "./assets/routes/frontview";
import Features from "./assets/routes/features";
import Connect from "./assets/routes/connect";
import Team from "./assets/routes/team";
import Scroll from "./assets/scroll_top/scroll_top"
import Autism from "./assets/routes/autism"
import Elderly from "./assets/routes/elderly"
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Router>
      <Scroll/>
        <Routes>
          <Route path="/" element={<Frontview />} />
          <Route path="/features" element={<Features />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/team" element={<Team/>} />
          <Route path="/autism" element={<Autism/>} />
          <Route path="/elderly" element={<Elderly/>} />
          
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
