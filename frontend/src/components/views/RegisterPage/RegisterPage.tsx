import React,{useState} from 'react'
import { useDispatch } from "react-redux";

function RegisterPage() {

    const dispatch = useDispatch();
    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Name, setName] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    

    const onEmailHandler = (event:any) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHandler = (event:any) => {
        setName(event.currentTarget.value);
    }
     
    const onPasswordHandler = (event:any) => {
        setPassword(event.currentTarget.value);
    }

    const onConfirmPasswordHandler = (event:any) => {
        setConfirmPassword(event.currentTarget.value);
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
        }

        let body = {
            email:Email,
            password:Password,
            name:Name
        }

        // dispatch(registerUser(body))
        //     .then(response => {
        //         if(response.payload.loginSuccess) {
                    
        //         } else {
        //             alert
        //         }
        //     })
        
    return (
        <div style={{
            display:'flex', justifyContent:"center", alignItems:"center",
            width:"100%", height:"100vh"
        }}>
            <form style={{display:'flex', flexDirection:'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler}/>

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>

                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

                <button type="submit">
                회원가입
            </button>
            </form>
            
            <br />
            

        
        </div>
    )
}
}

export default RegisterPage