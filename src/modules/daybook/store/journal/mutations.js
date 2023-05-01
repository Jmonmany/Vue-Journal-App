export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};
export const updateEntry = (state, payload) => {
  const index = state.entries.map((entry) => entry.id).indexOf(payload.id);
  state.entries[index] = payload;
};
export const addEntry = (state, payload) => {
  state.entries = [payload, ...state.entries];
};
export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id);
}
// mutations are functions that will change the state
