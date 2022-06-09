import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Plans } from "./components/Plans";
import { Simulation } from "./components/Simulation";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/simulation" element={<Simulation />} />
        </Routes>
        <GlobalStyle />
      </div>
    </BrowserRouter>
  );
}

export default App;
