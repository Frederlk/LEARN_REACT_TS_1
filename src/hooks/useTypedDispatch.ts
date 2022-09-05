import { useDispatch } from "react-redux";
import { TypedDispatch } from "../types/core";

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
