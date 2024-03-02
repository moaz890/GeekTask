import { configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./services/alertsSlice";

export const store = configureStore({
    reducer: {
        alerts: alertsSlice
    }
});

