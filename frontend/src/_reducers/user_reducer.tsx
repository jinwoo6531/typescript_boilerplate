import { LOGIN_USER, REGISTER_USER } from "../_actions/types";

//state는 전state, action
//타입이 많아지므로 switch를 써서 경우에 맞게 쓴다.
export default function (state = {}, action: any) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload };
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    default:
      return state;
  }
}
