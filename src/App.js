import { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import Incritions from "./pages/Inscritions";
import History from "./pages/history";



function App() {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <BrowserRouter>
    <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div style={{ width: "100%", display: "flex" }}>
        <Menu openMenu={openMenu} />
        <div style={{ width: "100%", padding:'5rem 2rem', boxSizing: 'border-box'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/history" element={<History />}/>
            <Route path="/inscritions" element={<Incritions />}/>
            <Route path="/library" element={<Library />}/>
          </Routes>
          </div>
        </div>
      </div>
  
    </BrowserRouter>
  );
}

export default App;
