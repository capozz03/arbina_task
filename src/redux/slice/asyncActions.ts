import { createAsyncThunk, miniSerializeError } from "@reduxjs/toolkit"
import { userService } from "./service"

export const getUsersAsync = createAsyncThunk(
  'users/getUsersAsync',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userService.getUsers()
      return data
    } catch (error) {
      const serializedError = miniSerializeError(error)
      alert('Ошибка получения пользователей')
      return rejectWithValue(serializedError)
    }
  }
)

export const getUsersSearchAsync = createAsyncThunk(
  'users/getUsersSearchAsync',
  async (query: string, { rejectWithValue }) => {
    try {
      const { data } = await userService.getSearchUsers(query)
      return data
    } catch (error) {
      const serializedError = miniSerializeError(error)
      alert('Ошибка получения пользователей')
      return rejectWithValue(serializedError)
    }
  }
)