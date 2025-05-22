import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero";
import MyFooter from "./component/MyFooter";
import MyNavbar from "./component/MyNavbar";
import MyFilm from "./component/MyFilm";
import { Container } from "react-bootstrap";
import TVShow from "./component/TVShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <BrowserRouter>
      <Container fluid className="bg-dark">
        <MyNavbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/TVShow" element={<TVShow />} />
        </Routes>

        <MyFooter />
      </Container>
    </BrowserRouter>
  );
}
export default App;
