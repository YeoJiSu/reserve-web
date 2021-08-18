import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

interface RootReducerProps {
  state: any;
  action: any;
}
const rootReducer = function ({ state, action }: RootReducerProps): any {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({});
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
