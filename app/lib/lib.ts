'use client';

import { useReducer } from "react";

const LOADING = 'loading';
const ERROR = 'error'; 
const SUCCESS = 'success';

interface DefaultState {
    loading: boolean;
    error: boolean;
    success: boolean;
    data?: any
}

export function makeUseAsyncReducer(actionType:string, initialState: DefaultState = {loading: false, error: false, success: false, data: undefined}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useReducer((state:any, action:any)=>{
        switch(action.type){
            case `${actionType}_INIT`:
                return {...state, loading: true, error: false, success: false}
            case `${actionType}_SUCCESS`:
                return {...state, loading: false, error: false, success: true, data: action.data}
            case `${actionType}_FAILURE`:
                return {...state, loading: false, error: true, success: false}
            default:
                return state
        } 
    }, initialState)
}

export function makeAsyncMethodHandler(actionType: string, dispatch:any){
    return async (method: any) => {
        dispatch({type: `${actionType}_INIT`})
        try {
            const result = await method();
            dispatch({type: `${actionType}_SUCCESS`,data: result})
        } catch (error) {
            dispatch({type: `${actionType}_FAILURE`})
        }
    }
}

