import logo from "./logo.svg";
import "./App.css";
import Heading from "./Components/Heading/Heading";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import AboutMe from "./Components/AboutMe/AboutMe";
import NewInfo from "./Components/NewInfo/NewInfo";
import PinNewsInfo from "./Components/PinNewsInfo/PinNewsInfo";
import NewsInfo from "./Components/NewInfoPage/NewInfoPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import NewInfoPage from "./Components/NewPage/NewPage";

function App() {
  return (
    <div>
      <Router>
        <Heading />
        <Routes>
          <Route path="/news" element={<NewsInfo />} />
          <Route path="/" element={<Navigate replace to="/news" />} />
          <Route path="/news/:id" element={<NewInfoPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/bookmarks" element={<PinNewsInfo />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
