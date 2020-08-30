// Types
export enum userTypes {
    LOGIN_REQUEST_PENDING = '@USER/LOGIN_REQUEST_PENDING',
    LOGIN_REQUEST_SUCCESS = '@USER/LOGIN_REQUEST_SUCCESS',
    LOGIN_REQUEST_ERROR = '@USER/LOGIN_REQUEST_ERROR',
    LOGUOT_USER = '@USER/LOGUOT_USER'
}

//Data Types

export interface User {
    Name: string | null,
    id: number | null,
}

// state type

export interface userState {
    readonly loggedIn: boolean,
    readonly pending: boolean,
    readonly error: boolean
}

// Creattors