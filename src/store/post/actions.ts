import { action } from 'typesafe-actions'
import { postTypes, Post } from './types'

export const postPending = () => action(postTypes.GET_POST_PENDING);

export const postSuccess = (data: Post[]) => action(postTypes.GET_POST_SUCCESS, data);

export const postError = () => action(postTypes.GET_POST_ERROR);
