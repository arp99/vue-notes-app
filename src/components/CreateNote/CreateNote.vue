<script>
export default {
  emits: ["add-note"],
  data() {
    return {
      createNoteState: "Create Note",
      currentNote: "",
    };
  },
  methods: {
    onAddNoteClicked() {
      console.log(" add note emiited");
      this.$emit("add-note", this.currentNote);
      this.currentNote = "";
    },
  },
  mounted() {
    this.$refs.noteInput.focus();
  },
};
</script>

<template>
  <div
    class="mt-4 w-[50%] p-4 mx-auto flex flex-col gap-3 shadow-xl rounded-sm"
  >
    <input
      type="text"
      v-model="currentNote"
      placeholder="What are you thinking today? 😃"
      ref="noteInput"
      class="p-2 border-2 border-solid border-blue-300 w-full transition-colors rounded-sm outline-none focus:border-blue-500"
    />
    <!-- When add note is clicked emit an event to push the current note to the state of the app state -->
    <button
      class="ml-auto block px-3 py-2 bg-blue-500 text-white rounded-sm transition-colors hover:bg-blue-600 disabled:opacity-60"
      :class="!currentNote && 'cursor-not-allowed'"
      :disabled="!currentNote"
      @click="onAddNoteClicked"
    >
      Add Note
    </button>
  </div>
  <div></div>
</template>
