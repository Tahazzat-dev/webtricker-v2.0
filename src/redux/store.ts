import { configureStore } from "@reduxjs/toolkit";
import ModalToggler from "./features/modalToggler/ModalTogglerSlice";
import Modyfier from "./features/rootModyfier/Modyfier";
import floatingText from "./features/dom/floatingDotSlice";
import { contactApi } from "./features/contact/contactApiSlice";

export const store = configureStore({
  reducer: {
    /* root modyfier to open dropdown, modal, menu or to toggle  between different active states */
    modyfier: Modyfier.reducer,

    floatingText: floatingText.reducer,

    // modal show/hide slice
    modalToggler: ModalToggler,

    // api slices can be added here
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
