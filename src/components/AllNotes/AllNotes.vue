<script>
import { CreateNote, ViewNote } from "../../components";
export default {
  emits: ["addNote", "toggle-favourite"],
  props: ["allNotes"],
  components: {
    CreateNote,
    ViewNote,
  },
  methods: {
    addNoteEventEmitted(note) {
      console.log(note);
      this.$emit("add-note", note);
    },
  },
  watch: {
    allNotes(notes) {
      console.log(notes);
    },
  },
};
</script>
<template>
  <div class="w-[75%] px-4">
    <CreateNote @add-note="addNoteEventEmitted" />
    <div class="mt-5 text-center">
      <h1 v-if="allNotes.length === 0">Nothing inside notes 🥲</h1>
      <h1 v-else>All notes</h1>
    </div>
    <div class="mt-5 w-full flex flex-wrap justify-center content-center gap-2">
      <ViewNote
        v-for="(item, index) in allNotes"
        :key="item.id"
        :note="item"
        @toggle-favourite="(id) => $emit('toggle-favourite', id)"
        @delete-note="(id) => $emit('delete-note', id)"
      ></ViewNote>
    </div>
  </div>
</template>
