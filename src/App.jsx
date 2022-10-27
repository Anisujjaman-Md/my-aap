import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogBody from "./pages/BlogBody";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/create" element={<Create />} />
            <Route exact path="/blog/:id" element={<BlogBody />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default App;
