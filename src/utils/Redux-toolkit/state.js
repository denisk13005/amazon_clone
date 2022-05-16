import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./user"

/**
 * redux store
 * @returns {store} redux store
 */
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})
