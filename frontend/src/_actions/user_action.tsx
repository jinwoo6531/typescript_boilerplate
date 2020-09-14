import axios from "axios";
import { 
    LOGIN_USER,
    REGISTER_USER,

} from "./types";

//server에서 받은 데이터를 request에 저장한다.
//그다음 return을 시켜서 reducer로 보낸다.
//reducer에서 전state와 action을 대조해서 다음 state를 만들어준다
export function loginUser(dataToSubmit:any) {
    
    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response =>(             
         response.data
    ))   

    return {
        type: LOGIN_USER,
        payload:request,
    }
}

export function registerUser(dataToSubmit:object){
    const request = axios.post('/api/users/register',dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}