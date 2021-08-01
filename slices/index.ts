import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import userSlice from "./user";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const rootReducer = (state: any, action: any): any => {
  switch (action.type) {
    case HYDRATE:
      // console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user: userSlice.reducer,
      });
      return combineReducer(state, action);
    }
  }
};

// const rootReducer = combineReducers({
//   user: userSlice.reducer,
// });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
