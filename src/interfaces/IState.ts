import IUser from "./IUser"

export default interface IState {
    isAuth: boolean,
    user: IUser,
    token: string,
    isLoading: boolean,
    errorMessage: string
}
