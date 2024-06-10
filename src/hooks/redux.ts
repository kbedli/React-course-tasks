import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// Use throughout your app of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
