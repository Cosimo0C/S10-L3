import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./component/Hero";
import MyFooter from "./component/MyFooter";
import MyNavbar from "./component/MyNavbar";
import MyFilm from "./component/MyFilm";
import { Container } from "react-bootstrap";
import TVShow from "./component/TVShow";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Container fluid className="bg-dark">
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <MyFilm film="Thor" />
                <MyFilm film="Batman" />
                <MyFilm film="Superman" />
              </>
            }
          />
          <Route path="/TVShow" element={<TVShow />} />
        </Routes>

        <MyFooter />
      </Container>
    </BrowserRouter>
  );
}
export default App;
