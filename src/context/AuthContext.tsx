import { useState, createContext } from "react";

interface IAuthContext {
    isAuth: boolean,
    setIsAuth: any
}

export const AuthContext = createContext<Partial<IAuthContext>>({})


function AuthContextProvider({children}: {children:JSX.Element}){

    const [isAuth, setIsAuth] = useState<boolean>(false);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider