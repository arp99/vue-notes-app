<script>
import { BIconHeart, BIconHeartFill, BIconTrash } from "bootstrap-icons-vue";
import { store } from "../../store";

export default {
  props: ["note"],
  components: {
    BIconHeart,
    BIconHeartFill,
    BIconTrash,
  },
  methods: {
    toggleFavourite(id) {
      store.commit("toggleFavourites", { id });
    },
    deleteNote(id){
      store.commit("deleteNote", { id })
    }
  },
};
</script>
<template>
  <div
    class="w-60 h-40 shadow-xl rounded-sm p-2 border border-solid border-gray-400 relative"
  >
    <p>
      {{ note.text }}
    </p>
    <div class="flex flex-col gap-2 absolute top-1 right-1">
      <BIconHeartFill
        role="button"
        class="text-blue-600 text-xl"
        @click="() => toggleFavourite(note.id)"
        v-if="note.isFavourite"
      />
      <BIconHeart
        role="button"
        class="text-blue-600 text-xl"
        @click="() => toggleFavourite(note.id)"
        v-else
      />
      <BIconTrash
        role="button"
        class="text-blue-600 text-xl"
        @click="() => deleteNote(note.id)"
      />
    </div>
  </div>
</template>
