<script>
import { store } from "../../store";

export default {
  props: ["currentTab"],
  methods: {
    changeTab(tab) {
      store.commit("changeTab", { tab });
    },
  },
};
</script>

<template>
  <div class="h-screen w-[25%] bg-blue-500 text-xl py-2 text-white">
    <header class="font-bold text-center px-2">Vue Notes</header>
    <div class="w-full mt-10 flex flex-col items-start">
      <button
        @click="() => changeTab('NOTES')"
        class="w-full py-3 transition-colors"
        :class="[
          currentTab === 'All Notes' && 'bg-blue-600',
          currentTab !== 'All Notes' && 'hover:bg-blue-400',
        ]"
      >
        All Notes
      </button>
      <button
        @click="() => changeTab('FAVOURITES')"
        class="w-full py-3 transition-colors"
        :class="[
          currentTab === 'Favourites' && 'bg-blue-600',
          currentTab !== 'Favourites' && 'hover:bg-blue-400',
        ]"
      >
        Favourite Notes
      </button>
    </div>
  </div>
</template>
