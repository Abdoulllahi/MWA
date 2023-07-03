export const data: {
    users: IUser[]
} = { users: [] }

export interface IUser {
    _id: string,
    name: string,
    email: string
}