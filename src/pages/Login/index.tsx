import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { useAuthContext } from '../../context/AuthContext';
import { FormWrapper, FormInputWrapper, LoginButton, ButtonSetPasswordVisible, ErrorField } from './style'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Login(){

    const[visible, setVisible] = useState(false)
    const {state, handleLogin} = useAuthContext();

    const {email, password, setEmail, setPassword} = useAuth();

    return(
        <FormWrapper>
            <h2>Login</h2>
            {state.errorMessage && <ErrorField>
                {state.errorMessage}
            </ErrorField>}
            <form onSubmit={(e) => handleLogin(e, email, password)}>
                <div>
                    <FormInputWrapper>
                        <label htmlFor="">email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </FormInputWrapper>

                    <div className='c-form-wrapper__input-wrapper'>
                        <FormInputWrapper>
                            <label htmlFor="">password</label>
                            <input type={visible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)}/>
                            <ButtonSetPasswordVisible onClick={e => {e.preventDefault(); setVisible(!visible)}}>
                                { visible ? <FaEyeSlash/> : <FaEye/> }
                            </ButtonSetPasswordVisible>
                        </FormInputWrapper>
                        <div style={{textAlign: 'right', marginTop: '5px'}}>
                            <Link to="forgot-password">Esqueci minha senha</Link>
                        </div>

                    </div>
                    <LoginButton type='submit'>{state.isLoading ? 'Loading...' : 'Entrar'}</LoginButton>
                    <div style={{textAlign: 'center'}}>
                        <Link to="register">Ainda não possui conta ? <span>Cadastre-se!</span></Link>
                    </div>
                </div>
            </form>
        </FormWrapper>
    )
}

export default Login;