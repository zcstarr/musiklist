'use client';

import React, { useEffect } from "react";
import { useReducer } from "react";

const globalReducer = (state:any, action:any) => {
    switch(action.type) {
        case "ADD_TO_LIST": { 
            if(state.items[action.data]){
                return state;
            }
            const newState = {...state,
                items: {
                    ...state.items,
                    [action.data]: {link: action.data, up: 0, down: 0}
                }
            }
            localStorage.setItem("appState", JSON.stringify(newState))
            return newState;
        }
        case "UPDATE_LIST":{
            const actionData = action.data;
            if(!state.items[actionData.link]){
                return state;
            }
            const newState = {...state,
                items: {
                    ...state.items,
                    [actionData.link]:actionData 
                }
            }
            localStorage.setItem("appState", JSON.stringify(newState))
            return newState;

        }
        default:
            return state
    }

}

const initialAppState: any =  {
    items: {} // Array {link: string, up: number, down: number}
}

export const AppContext = React.createContext(initialAppState)


export function AppProvider({children}:any){
    const [appState, dispatch] = useReducer(globalReducer, initialAppState, (initialAppState:any) => {
        const aState = localStorage.getItem("appState")
        return aState ? JSON.parse(aState) : initialAppState
    })
    return (
        <AppContext.Provider value={{appState, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}