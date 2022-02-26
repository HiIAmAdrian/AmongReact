import { createSlice } from "@reduxjs/toolkit";

const OPEN = true;
const CLOSED = false;

const gameSlice = createSlice({
  name: "game",
  initialState: {
    modalEducation: CLOSED,
    modalWork: CLOSED,
    modalVolunteer: CLOSED,
    modalProjects: CLOSED,
  },
  reducers: {
    openModalEducation(state) {
      state.modalEducation = OPEN;
    },
    openModalWork(state) {
      state.modalWork = OPEN;
    },
    openModalVolunteer(state) {
      state.modalVolunteer = OPEN;
    },
    openModalProjects(state) {
      state.modalProjects = OPEN;
    },
    closeModalEducation(state) {
      state.modalEducation = CLOSED;
    },
    closeModalWork(state) {
      state.modalWork = CLOSED;
    },
    closeModalVolunteer(state) {
      state.modalVolunteer = CLOSED;
    },
    closeModalProjects(state) {
      state.modalProjects = CLOSED;
    },
  },
});

export const {
  openModalEducation,
  openModalWork,
  openModalVolunteer,
  openModalProjects,
  closeModalEducation,
  closeModalProjects,
  closeModalVolunteer,
  closeModalWork,
} = gameSlice.actions;

export default gameSlice;
