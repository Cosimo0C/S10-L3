import { Button } from "react-bootstrap";
import MyFilm from "./MyFilm";

function TVShow() {
  return (
    <div className="bg-dark">
      <h1 className="text-white">Sei su Tv shows</h1>
      <MyFilm film="Spider-man" />
      <Button
        onClick={() => {
          Navigate("/");
        }}
      >
        {" "}
        Torna Home
      </Button>
    </div>
  );
}
export default TVShow;
