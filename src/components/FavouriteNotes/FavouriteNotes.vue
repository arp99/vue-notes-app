<script>
import { ViewNote } from "../../components";
export default {
  props: ["allNotes"],
  components: {
    ViewNote,
  },
  methods: {
    print(val) {
      console.log(val);
    },
  },
  computed: {
    favouriteNotes() {
      return this.allNotes.filter((note) => note.isFavourite);
    },
  },
};
</script>
<template>
  <div class="w-[75%]">
    <h1 class="text-center text-xl">Favourite Notes</h1>
    <div class="mt-5 w-full flex flex-wrap justify-center content-center gap-2">
      <h1 v-if="favouriteNotes.length === 0">Nothing Inside favourites 🥲</h1>
      <ViewNote
        v-for="(item, index) in favouriteNotes"
        :key="item.id"
        :note="item"
        @toggle-favourite="(id) => $emit('toggle-favourite', id)"
        @delete-note="(id) => $emit('delete-note', id)"
      ></ViewNote>
    </div>
  </div>
</template>
