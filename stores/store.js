import { defineStore } from "pinia";
import { jsPDF } from "jspdf";

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
