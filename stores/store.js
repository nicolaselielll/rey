import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  var isTablet = ref(false);
  var isMobile = ref(false);

  return {
    isTablet,
    isMobile,
  };
});
