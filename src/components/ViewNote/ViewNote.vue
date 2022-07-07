<script>
import { BIconHeart, BIconHeartFill, BIconTrash } from "bootstrap-icons-vue";
export default {
  props: ["note"],
  emits: ["toggle-favourite", "delete-note"],
  components: {
    BIconHeart,
    BIconHeartFill,
    BIconTrash,
  },
  data() {
    return {
      viewNoteState: "View note",
    };
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
        @click="$emit('toggle-favourite', note.id)"
        v-if="note.isFavourite"
      />
      <BIconHeart
        role="button"
        class="text-blue-600 text-xl"
        @click="$emit('toggle-favourite', note.id)"
        v-else
      />
      <BIconTrash
        role="button"
        class="text-blue-600 text-xl"
        @click="$emit('delete-note', note.id)"
      />
    </div>
  </div>
</template>
