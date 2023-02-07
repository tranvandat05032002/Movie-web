import requestFetchData from "./handle";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  info: [],
  loading: true,
};
export const handleRequest = createAsyncThunk(
  "fetchAPI/handleRequest",
  async (query, thunkAPI) => {
    const response = await requestFetchData(query);
    return response;
  }
);
const fetchSlice = createSlice({
  name: "fetchAPI",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleRequest.fulfilled);
  },
});
