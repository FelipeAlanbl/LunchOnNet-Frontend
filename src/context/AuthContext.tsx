import { createContext, useContext, useEffect, useState } from "react";
import api from '../api/api';
import IUser from '../interfaces/IUser';
import IState from '../interfaces/IState';
import IAuthContext from "../interfaces/IAuthContext";
import IForm from "../interfaces/IForm";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

function AuthContextProvider({children}: {children:JSX.Element}){

    const initialState: IState = JSON.parse(localStorage.getItem('lunchonnetUSer') || '') ?? {
        isAuth: false,
        user: {} as IUser,
        token: '',
        isLoading: false,
        errorMessage: '',
    }

    const [state, setState] = useState<IState>(initialState)

    const { token } = initialState;

    if(token) 
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

   
    async function handleLogin(event: React.FormEvent<HTMLFormElement>, email: string, password: string){
        event.preventDefault();

        setState({...state, isLoading: true})

        try {

            const response = await api.post("/auth/login", { email, password });
            const { user, token} = await response.data;
            await setState({...state, isAuth: true, user, token, isLoading: false, errorMessage: ''});
            
            localStorage.setItem('lunchonnetUSer', JSON.stringify({ isAuth: true, user, token}));

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    

        } catch (err: any) {
            setState({...state, errorMessage: err.response.data.message})
        }
    }

    async function handleLogout(){
        localStorage.setItem('lunchonnetUSer', JSON.stringify({...state, isAuth: false, user: {} as IUser, token: ''}));
        await setState({...state, isAuth: false, user: {} as IUser, token: ''});
        api.defaults.headers.common['Authorization'] = '';
    }

    async function handleRegister(event: React.FormEvent<HTMLFormElement>, form: IForm){
        event.preventDefault();
        
        setState({...state, isLoading: true});

        try {
            const response = await api.post('/auth/register', form)

            const {user, token} = response.data;

            if(user && token) {
                await setState({...state, isAuth: true, user, token, isLoading: false});
            
                localStorage.setItem('lunchonnetUSer', JSON.stringify({ isAuth: true, user, token}));

                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }
        }

        catch(err: any) {
            setState({...state, errorMessage: err.response.data.message})
        }
    }

    return (
        <AuthContext.Provider value={{state, setState, handleLogin, handleLogout, handleRegister}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    return context
};

