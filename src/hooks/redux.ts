import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { store, TState } from "../redux/store"

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<TState> = useSelector