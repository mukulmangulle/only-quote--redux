
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quoteData: {
      content: "Jeene Hai ye ",
      author: "Amite khushro",
    },
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quoteData = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default quoteSlice.reducer;

export const fetchQuote = createAsyncThunk("FETCH/QUOTE", async () => {
  const res = await fetch("https://quotable.io/random");
  const data = await res.json();
  return data;
});

