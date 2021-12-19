import {apiRequest} from './request'
import {CatType} from '../types/cats'

export const getCats = async (): Promise<CatType[]> => {
    return await apiRequest().get(
        '/images/search',{
            params: {
                format: 'json',
                limit: 10,
                page: 0
            }
        }
    ).then(response => {
        return response.data
    })
}