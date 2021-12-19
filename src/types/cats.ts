import {ServerResponse} from './ServerResponse'
export type CatType = {
    id: string;
    url: string;
    breeds: any[];
    categories: any[];
    like?: boolean;
}
export enum CatsActionTypes  {
    GET_CATS = 'GET_CATS',
    GET_CATS_LOADING = 'GET_CATS_LOADING',
    LIKE_CAT = 'LIKE_CAT',
    DELETE_CAT = 'DELETE_CAT'
}

export type CatsState = {
    cats: ServerResponse<CatType>,
    error: string,
    isLoading: boolean
}
interface GetCats {
    type: CatsActionTypes.GET_CATS;
    payload: ServerResponse<CatType>;
}
interface GetCatsLoading {
    type: CatsActionTypes.GET_CATS_LOADING;
}
interface CatLike {
    type: CatsActionTypes.LIKE_CAT;
    payload: string
}
interface CatDelete {
    type: CatsActionTypes.DELETE_CAT;
    payload: string
}

export type CatsAction = GetCats | GetCatsLoading | CatLike | CatDelete