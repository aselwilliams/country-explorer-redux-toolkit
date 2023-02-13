import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.value = true;
    },
    stopLoading: (state, action) => {
      state.value = false;
    },
  },
});

export const loading = (state) => state.isLoading.value;
console.log("loading inside slice", loading);

export const loadingActions = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
