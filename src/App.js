import React from "react";
import { IonPhaser } from "@ion-phaser/react";
import { game } from "./phaser/src/index";
import "./phaser/index.css";
import ModalEducation from "./components/ModalEducation";

function App() {
  return (
    <div>
      <IonPhaser game={game} initialize={true} />
      <ModalEducation />
    </div>
  );
}

export default App;
