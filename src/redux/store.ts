import { configureStore } from '@reduxjs/toolkit'
import { usersReducer } from './slices/users'

const rootReducer = { users: usersReducer }

export const store = configureStore({
  reducer: rootReducer,
})

export type TState = ReturnType<typeof store.getState>
