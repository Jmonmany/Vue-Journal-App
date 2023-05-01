export const getEntriesBtTerm =
  (state) =>
  (term = "") => {
    if (term.length === 0) return state.entries;
    return state.entries.filter((entry) =>
      entry.text.toLowerCase().includes(term.toLocaleLowerCase())
    );
    // second return will return an array of entries that match the term in lowercase,
    // in other terms we are filtering the entries array by the text user is typing
  };
export const getEntryById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) return;
    return { ...entry }; // we are returning a copy of the entry object destructured to avoid mutation
  };
// getters are functions that will return a value from the state in the form of a computed property
