export const setEntries = (state) => {
  state.count
};
export const updateEntry = (state, payload) => {
  state.count += payload;
  state.lastMutation = "incrementBy " + payload;
  state.lastRandom = payload;
};
export const addEntry = (state, payload) => {
  state.isLoading = payload;
};
// mutations are functions that will change the state
