// No transition to start, set default to true.
const state = reactive({
  firstRender: false,
  transitionComplete: false,
  transitionOnEnter: false,
});

export const usePageTransitionState = () => {
  const setFirstRender = () => {
    state.firstRender = true;
  };
  const toggleComplete = (value) => {
    state.transitionComplete = value;
  };
  const toggleOnEnter = (value) => {
    state.transitionOnEnter = value;
  };

  return {
    state,
    toggleComplete,
    setFirstRender,
    toggleOnEnter
  };
};
