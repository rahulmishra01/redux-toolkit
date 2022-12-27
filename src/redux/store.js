import { configureStore } from "@reduxjs/toolkit";
import PostReducer from "./action";

export default configureStore({
  reducer: {
    app: PostReducer,
  },
});