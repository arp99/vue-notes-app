<script>
import { SideNav, AllNotes, FavouriteNotes } from "./components";
import { mapGetters } from "vuex";

export default {
  components: {
    SideNav,
    AllNotes,
    FavouriteNotes,
  },
  computed: {
    ...mapGetters(["getNotes", "getTab"]),
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
    <SideNav :currentTab="getTab" />
    <AllNotes v-if="getTab === 'All Notes'" :allNotes="getNotes" />
    <FavouriteNotes v-else />
  </div>
</template>
