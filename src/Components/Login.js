import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../Redux/Slice/UserProfileReducer';
import { useNavigate } from 'react-router-dom';
function Login() {
    const dispatch = useDispatch();
    const [User, setUser] = useState("");
    let navigate  = useNavigate();

    const redirect = () => {
        navigate('/books')
    }

    return (


        <div>
            <input type="text" onChange={(event) => { setUser(event.target.value) }} ></input>
            <p> {User}</p>
            <button onClick={() => {
                let user = User;
                dispatch(userLogin({ UserName: user }));  
                redirect();             

            }}>Login</button>

        </div>
    )
}

export default Login
