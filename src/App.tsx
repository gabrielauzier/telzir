import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { History } from "./components/History";
import { Home } from "./components/Home";
import { Plans } from "./components/Plans";
import { Simulation } from "./components/Simulation";
import { AuthProvider } from "./hooks/auth";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/simulation" element={<Simulation />} />
            <Route path="/history" element={<History />} />
          </Routes>
          <GlobalStyle />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
