import { Container } from "react-bootstrap";
import Hero from "./Hero";
import MyFilm from "./MyFilm";

function Home() {
  return (
    <>
      <Container fluid>
        <Hero />
        <MyFilm film="Thor" />
        <MyFilm film="Batman" />
        <MyFilm film="Superman" />
      </Container>
    </>
  );
}
export default Home;
