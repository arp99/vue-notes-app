import { createStore } from "vuex";
import { v4 as uuid } from "uuid";

export const store = createStore({
  state() {
    return {
      tab: "All Notes",
      allNotes: JSON.parse(localStorage.getItem("notes")) || [],
    };
  },
  mutations: {
    changeTab(state, payload) {
      const { tab } = payload;

      switch (tab) {
        case "NOTES":
          state.tab = "All Notes";
          break;
        case "FAVOURITES":
          state.tab = "Favourites";
          break;
        default:
          state.tab = "All Notes";
      }
    },
    addNote(state, payload) {
      const { newNote } = payload;
      console.log({ newNote });
      state.allNotes.push({ id: uuid(), text: newNote, isFavourite: false });
      localStorage.setItem("notes", JSON.stringify(state.allNotes));
    },
    toggleFavourites(state, payload) {
      const { id } = payload;
      state.allNotes = state.allNotes.map((note) =>
        note.id === id ? { ...note, isFavourite: !note.isFavourite } : note
      );
      localStorage.setItem("notes", JSON.stringify(state.allNotes));
    },
    deleteNote(state, payload) {
      const { id } = payload;
      state.allNotes = state.allNotes.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(state.allNotes));
    },
  },
  getters: {
    getTab(state) {
      return state.tab;
    },
    getNotes(state) {
      return state.allNotes;
    },
    getFavourites(state) {
      return state.allNotes.filter((note) => note.isFavourite);
    },
  },
});
