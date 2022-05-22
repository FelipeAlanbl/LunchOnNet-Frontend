import IForm from "./IForm";
import IState from "./IState";

export default interface IAuthContext {
    state: IState,
    setState: (state: IState) => void,
    handleLogin: (event: React.FormEvent<HTMLFormElement>, email: string, password: string) => Promise<void>,
    handleLogout: () => void,
    handleRegister: (event: React.FormEvent<HTMLFormElement>, form: IForm) => void
}