import { configureStore } from "@reduxjs/toolkit";
import game from "./reducerPhaser";

const store = configureStore({
  reducer: {
    game: game.reducer,
  },
});

export const getModalEducationState = (state) => state.game.modalEducation;

export default store;
