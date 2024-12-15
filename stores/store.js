import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  var isTablet = ref(false);
  var isMobile = ref(false);
  var isTouch = ref(false)
  var smoother = ref(null)

  return {
    isTablet,
    isMobile,
  };
});
