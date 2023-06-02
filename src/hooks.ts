import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch :() => AppDispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;



// <>で詳細を入れる感じ