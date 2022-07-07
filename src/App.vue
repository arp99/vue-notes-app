<script>
import { v4 as uuid } from "uuid";
import { SideNav, AllNotes, FavouriteNotes } from "./components";

export default {
  data() {
    return {
      message: "Hello world",
      currentTab: "All Notes",
      allNotes: JSON.parse(localStorage.getItem("notes")) || [],
    };
  },
  components: {
    SideNav,
    AllNotes,
    FavouriteNotes,
  },
  methods: {
    changeTab(tab) {
      switch (tab) {
        case "NOTES":
          this.currentTab = "All Notes";
          break;
        case "FAVOURITES":
          this.currentTab = "Favourites";
          break;
        default:
          this.currentTab = "All Notes";
      }
    },
    addNote(newNote) {
      console.log({ newNote });
      this.allNotes.push({ id: uuid(), text: newNote, isFavourite: false });
      localStorage.setItem("notes", JSON.stringify(this.allNotes));
    },
    toggleFavourites(id) {
      console.log(id);
      this.allNotes = this.allNotes.map((note) =>
        note.id === id ? { ...note, isFavourite: !note.isFavourite } : note
      );
      localStorage.setItem("notes", JSON.stringify(this.allNotes));
    },
    deleteNote(id) {
      this.allNotes = this.allNotes.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(this.allNotes));
    },
  },
  watch: {
    currentTab(newTab) {
      console.log(newTab);
    },
  },
};

/**
 * Make the following components:
 * 1. Sidenav - have 2 options
 *    a. All notes
 *    b. Favourite Notes
 * 2. Main page - Will show the data depending on the sidenav option chosen
 * 3. In the All notes section -
 *  a. Show a create note component
 *  b. Below the show note component show all the notes either added to favourites or not
 * 4. In the Favourite Notes section filter and show only those notes which are added to favourites
 * 5. Save the notes in the localstorage such that the app persists the state on reloads even
 * Design system : tailwindcss
 * Icons library: to be decided while trying all that are available
 *
 */
</script>

<template>
  <div class="w-screen h-screen flex">
    <SideNav :currentTab="currentTab" @changeTab="changeTab" />
    <AllNotes
      v-if="currentTab === 'All Notes'"
      :allNotes="allNotes"
      @add-note="addNote"
      @toggle-favourite="toggleFavourites"
      @delete-note="deleteNote"
    />
    <FavouriteNotes
      v-else
      :allNotes="allNotes"
      @toggle-favourite="toggleFavourites"
      @delete-note="deleteNote"
    />
  </div>
</template>
