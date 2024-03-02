import { createSlice } from "@reduxjs/toolkit";

export const alertsSlice = createSlice({
  name: "alertsSlice",
  initialState: {
    data: [
      {
        name: "AMZN",
        risk: "h",
        value: 200,
        state: "o",
      },
      {
        name: "TSLA",
        risk: "h",
        value: 200,
        state: "g",
      },
      {
        name: "ABQQ",
        risk: "h",
        value: 200,
        state: "g",
      },
      {
        name: "MSFT",
        risk: "l",
        value: 200,
        state: "o",
      },
      {
        name: "PYPL",
        risk: "l",
        value: 200,
        state: "g",
      },
      {
        name: "NFLX",
        risk: "l",
        value: 200,
        state: "o",
      },
      {
        name: "NFLX",
        risk: "l",
        value: 200,
        state: "o",
      },
      {
        name: "NFLX",
        risk: "l",
        value: 200,
        state: "o",
      },
      {
        name: "NFLX",
        risk: "l",
        value: 200,
        state: "o",
      },
      {
        name: "NFLX",
        risk: "l",
        value: 200,
        state: "o",
      },
      {
        name: "NFLX",
        risk: "h",
        value: 200,
        state: "o",
      },
    ],
    filtered: [],
  },
  reducers: {},
});

export default alertsSlice.reducer;
