import {CatsAction, CatsActionTypes} from "../../types/cats";
import {Dispatch} from 'react';
import {getCats as GetCatsAPI} from '../../api/cats'


export const getCats = () =>{
    return  async (dispatch: Dispatch<CatsAction>) => {
        const payload = await GetCatsAPI()
        dispatch({type: CatsActionTypes.GET_CATS, payload})
    }
}
export const likeCat = (id: string) => {
    return (dispatch: Dispatch<CatsAction>) => {
        dispatch({type: CatsActionTypes.LIKE_CAT, payload: id})
    }
}
export const deleteCat = (id: string) => {
    return (dispatch: Dispatch<CatsAction>) => {
        dispatch({type: CatsActionTypes.DELETE_CAT, payload: id})
    }
}