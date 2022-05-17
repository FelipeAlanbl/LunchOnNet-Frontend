import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";
import { AuthContext } from '../context/AuthContext'

function Login(){

    const { isAuth } = useContext(AuthContext);
    const {email, password, handleLogin, setEmail, setPassword} = useAuth();

    if(isAuth) return <Navigate to="/" />

    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="">email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label htmlFor="">password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;