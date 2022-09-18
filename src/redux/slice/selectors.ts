import { createSelector } from "@reduxjs/toolkit";
import { RequestStatuses } from "../../shared";
import { TState } from "../store";

export const getUsersSlice = (state: TState) => state;

export const usersSelector = createSelector(
  getUsersSlice,
  (slice) => slice.users.users
);

export const loadingStatusSelector = createSelector(
  getUsersSlice,
  (slice) => slice.users.status === RequestStatuses.LOADING
);