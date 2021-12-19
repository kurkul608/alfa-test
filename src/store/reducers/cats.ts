import {CatsAction, CatsActionTypes, CatsState, CatType} from "../../types/cats";
import {ServerResponse} from '../../types/ServerResponse'


const initialState: CatsState = {
    cats: [] as ServerResponse<CatType>,
    error: '',
    isLoading: false
}

export const catsReducer = (state = initialState, action: CatsAction) => {
    switch (action.type) {
        case CatsActionTypes.GET_CATS: {
            const {payload} = action
            payload.forEach(cat => {
                if (!cat.hasOwnProperty('like')) {
                    cat['like'] = false
                }
            })
            return {...state, cats: payload}
        }
        case CatsActionTypes.GET_CATS_LOADING: {
            return {...state, isLoading: !state.isLoading}
        }
        case CatsActionTypes.LIKE_CAT: {
            const id = action.payload
            const newCats = state.cats.map(cat => {
                if (cat.id === id) {
                    cat.like = !cat.like
                }
                return cat
            })
            return {...state, cats: newCats}
        }
        case CatsActionTypes.DELETE_CAT: {
            const id = action.payload
            const newCats = state.cats.filter(cat => cat.id !== id)
            return {...state, cats: newCats}
        }
        default: {
            return state
        }
    }
}