import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { FormWrapper, FormInputWrapper, LoginButton, ButtonSetPasswordVisible } from '../Login/style';
import { TypeUserWrapper } from './style';
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Register(){

    const { handleRegister } = useAuthContext();

    const [visible, setVisible] = useState(false);
    
    const [ form, setForm ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        type: 'owner'

    })

    return(
        <FormWrapper>
            <h2>Cadastre-se :)</h2>
            
            <form onSubmit={e => handleRegister(e, form)}>
                <div>
                    <TypeUserWrapper>
                        <input type="radio" name="type" id="owner" value="owner" checked={form.type === 'owner'} onChange={e => setForm({...form, type: e.target.value})}/>
                        <label htmlFor='owner'>
                            <span>Proprietário</span>
                        </label>
                        <input 
                            type="radio" name="type" id="client" value="client" onChange={e => setForm({...form, type: e.target.value})}/>
                        <label htmlFor='client'>
                            Cliente
                        </label>
                    </TypeUserWrapper>

                    <div>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <FormInputWrapper>
                                <label htmlFor="">Nome</label>
                                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})}/>
                            </FormInputWrapper>
                            <FormInputWrapper>
                                <label htmlFor="">Email</label>
                                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/>
                            </FormInputWrapper>
                            <FormInputWrapper>
                                <label htmlFor="">Senha</label>
                                <input type={ visible ? 'text' : 'password' } value={form.password} onChange={e => setForm({...form, password: e.target.value})}/>
                                <ButtonSetPasswordVisible onClick={e =>{e.preventDefault(); setVisible(!visible)}}>
                                    { visible ? <FaEyeSlash /> : <FaEye /> }
                                </ButtonSetPasswordVisible>
                            </FormInputWrapper>
                            <FormInputWrapper>
                                <label htmlFor="">Confirme sua senha</label>
                                <input type={ visible ? 'text' : 'password' } value={form.confirmPassword} onChange={e => setForm({...form, confirmPassword: e.target.value})}/>
                            </FormInputWrapper>
                            <LoginButton>Cadastrar</LoginButton>
                        </div>
                    </div>
                </div>
            </form>

            <Link to="/auth">Já possuo conta</Link>
            
        
        </FormWrapper>
    )
}

export default Register;

/*
{
            name: 'Samara',
            email: 'samarasimoes@email.com',
            password: '123456',
            active: 1,
            type: 'client',
            address: {
                address: 'Rua Lago Dourado',
                number: '381',
                city: 'Paulo Afonso',
                state: 'BA',
                zipCode: '48601-320',
                type: 'residencial'
            }
        }

*/