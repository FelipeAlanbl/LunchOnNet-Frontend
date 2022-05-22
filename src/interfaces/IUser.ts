import IUserID from "./IUserID";

export default interface IUser {
    id: number,
    name: string,
    email: string,
    type: string,
    active: string,
    Admin?: IUserID,
    Client?: IUserID,
    Owner?: IUserID,
}