import { store } from "../store";
import { rootReducer } from "../store/reducers";

/* Core */
import { AnyAction } from "redux";

/* Instruments */
import { ThunkAction, ThunkDispatch } from "redux-thunk";

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
export type TypedThunk<ReturnType = void> = ThunkAction<ReturnType, ReduxState, unknown, AnyAction>;
