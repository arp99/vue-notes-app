<script>
import { CreateNote, ViewNote } from "../../components";
import { mapGetters } from "vuex";

export default {
  props: ["allNotes"],
  components: {
    CreateNote,
    ViewNote,
  },
  computed: {
    ...mapGetters(["getNotes"]),
  },
};
</script>
<template>
  <div class="w-[75%] px-4">
    <CreateNote />
    <div class="mt-5 text-center">
      <h1 v-if="getNotes.length === 0">Nothing inside notes 🥲</h1>
      <h1 v-else>All notes</h1>
    </div>
    <div class="mt-5 w-full flex flex-wrap justify-center content-center gap-2">
      <ViewNote
        v-for="(item, index) in getNotes"
        :key="item.id"
        :note="item"
      ></ViewNote>
    </div>
  </div>
</template>
