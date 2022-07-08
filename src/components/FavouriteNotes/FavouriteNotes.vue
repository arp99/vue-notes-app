<script>
import { ViewNote } from "../../components";
import { mapGetters } from "vuex";

export default {
  components: {
    ViewNote,
  },
  computed: {
    ...mapGetters(["getFavourites"]),
  },
};
</script>
<template>
  <div class="w-[75%]">
    <h1 class="text-center text-xl">Favourite Notes</h1>
    <div class="mt-5 w-full flex flex-wrap justify-center content-center gap-2">
      <h1 v-if="getFavourites.length === 0">Nothing Inside favourites 🥲</h1>
      <ViewNote
        v-for="(item, index) in getFavourites"
        :key="item.id"
        :note="item"
      />
    </div>
  </div>
</template>
