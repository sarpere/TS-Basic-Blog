// Types
export enum postTypes {
    GET_POST_PENDING = '@POST/GET_POST_PENDING',
    GET_POST_SUCCESS = '@POST/GET_POST_SUCCESS',
    GET_POST_ERROR = '@POST/GET_POST_ERROR'
}

//Data Types

export interface Post {
    id: number,
    title: string,
    content: string,
    imagePath: string
}

// state type

export interface postState {
    readonly data: Post[],
    readonly pending: boolean,
    readonly error: boolean
}

// Creattors