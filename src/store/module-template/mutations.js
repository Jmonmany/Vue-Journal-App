export const AMutation = (state) => {
  state.count++;
  state.lastMutation = "increment";
};
export const BMutation = (state, payload) => {
  state.count += payload;
  state.lastMutation = "incrementBy " + payload;
  state.lastRandom = payload;
};
export const CMutation = (state, payload) => {
  state.isLoading = payload;
};
