import { createLogger } from "vite";
import "./App.css";
import Jerry from "./assets/celebrity_jerry.jpeg";
import LeonardSmith from "./assets/leonard_smith.jpeg";
import LighthouseKeeper from "./assets/lighthouse_keeper.jpeg";
import PatGueterman from "./assets/pat_gueterman.jpeg";

function App() {
  const characters = [
    {
      name: "Celebrity Jerry",
      last_known_location: "Earth (C-500A)",
      status: "Alive",
      first_seen_in: "Rixty Minutes",
      species: "Human",
      image: Jerry.src,
    },
    {
      name: "Leonard Smith",
      last_known_location: "Earth (C-137)",
      status: "Alive",
      first_seen_in: "Anatomy Park",
      species: "Human",
      image: LeonardSmith.src,
    },
    {
      name: "Light House Keeper",
      last_known_location: "Purge Planet",
      status: "Dead",
      first_seen_in: "Look Who's Purging Now",
      species: "Alien",
      image: LighthouseKeeper.src,
    },
    {
      name: "Pat Gueterman",
      last_known_location: "Planet Squanch",
      status: "Dead",
      first_seen_in: "The Wedding Squanchers",
      species: "Robot",
      image: PatGueterman.src,
    },
  ];

  console.log(characters)

  return (
    <div>
      <h1>My Favorite Characters</h1>
    </div>
  );
}

export default App;
