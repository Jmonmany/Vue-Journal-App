import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/Entries.json");
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};
export const updateEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;
  const dataToSave = { date, picture, text };
  const resp = await journalApi.put(`/Entries/${entry.id}.json`, dataToSave);
  commit("updateEntry", { ...entry });
};
export const createEntry = async () => {};
// actions are async functions that will dialog with the backend
