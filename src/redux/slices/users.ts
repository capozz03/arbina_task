import { createSlice } from '@reduxjs/toolkit'
import { RequestStatuses } from '../../shared'
import { TUsersState } from './entities'

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
    // [getUsersAsync.pending.type]: (state: TUsersState) => ({
    //   ...state,
    //   status: RequestStatuses.LOADING,
    // }),
    // [getUsersAsync.fulfilled.type]: (
    //   state: TUsersState,
    //   { payload }: PayloadAction<TUserData[]>
    // ) => ({
    //   ...state,
    //   status: RequestStatuses.SUCCESS,
    //   users: payload,
    // }),
    // [getUsersAsync.rejected.type]: (
    //   state: TUsersState,
    //   { payload: error }: PayloadAction<Error>
    // ) => ({
    //   users: null,
    //   status: RequestStatuses.FAILURE,
    //   error,
    // }),
  },
})

export const usersReducer = usersSlice.reducer
