import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RequestStatuses } from '../../shared'
import { getUsersAsync, getUsersSearchAsync } from './asyncActions'
import { TUsers, TUsersState } from './entities'

const initialState = {
  users: [],
  status: RequestStatuses.IDLE,
  error: null,
} as TUsersState

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение пользователей
    [getUsersAsync.pending.type]: (state: TUsersState) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getUsersAsync.fulfilled.type]: (
      state: TUsersState,
      { payload }: PayloadAction<TUsers[]>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      users: payload,
    }),
    [getUsersAsync.rejected.type]: (
      _,
      { payload: error }: PayloadAction<Error>
    ) => ({
      users: null,
      status: RequestStatuses.FAILURE,
      error,
    }),

    // Получение найденных пользователей
    [getUsersSearchAsync.pending.type]: (state: TUsersState) => ({
      ...state,
      status: RequestStatuses.LOADING,
    }),
    [getUsersSearchAsync.fulfilled.type]: (
      state: TUsersState,
      { payload }: PayloadAction<TUsers[]>
    ) => ({
      ...state,
      status: RequestStatuses.SUCCESS,
      users: payload,
    }),
    [getUsersSearchAsync.rejected.type]: (
      _,
      { payload: error }: PayloadAction<Error>
    ) => ({
      users: null,
      status: RequestStatuses.FAILURE,
      error,
    }),
  },
})

export const usersReducer = usersSlice.reducer
