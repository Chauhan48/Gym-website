import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/navigation";
import About from "./components/about";
import Contacts from "./components/contacts";
import Help from "./components/help";
import NotFound from "./components/notFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/content";

function App() {
  return (
    <div className="App area">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Content />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
