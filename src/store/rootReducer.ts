import { combineReducers } from "@reduxjs/toolkit";
import {catsReducer as cats} from './reducers/cats'

export const rootReducer = combineReducers({ cats });
