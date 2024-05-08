'use client';
import { makeAsyncMethodHandler, makeUseAsyncReducer } from "../lib/lib";
import { AppContext } from "../state/global";
import { inputStyle } from "./Input"
import { ListEntry } from "./ListEntry"
import { useContext, useEffect, useReducer, useState } from "react"

export function List() {
    const {appState} = useContext(AppContext)
    return(
        <div>
    <div className="pt-4 flex flex-col justify-center items-center w-full"> 
        {Object.keys(appState.items).map((itemKey:any)=> (<ListEntry entry={appState.items[itemKey]} key={`id_${itemKey}`} link={itemKey}>{itemKey}</ListEntry>))}
    </div>
    <div> {JSON.stringify(appState.items)} </div>
    </div>
    )
}

export function ListInputWidget({className}:any) {
    const [inputValue, setInputValue] = useState("")
    const {appState, dispatch} = useContext(AppContext)

    return (
        <div className="w-full">
            <input className={className} placeholder="Add your link" onChange={(e)=>{
               setInputValue(e.target.value)
            }}
            onKeyDown={(e) => {
                e.key === "Enter" && dispatch({type:"ADD_TO_LIST",data: inputValue}) 
            }}
            ></input>
            <button className="bg-blue-500 text-white p-2 rounded-lg" onClick={() => 
            dispatch({type:"ADD_TO_LIST",data: inputValue}) 
            }>Add</button>
        </div>
    )
}

export function ListMainView() {
    return (
        <div className="flex flex-col items-start p-3 w-full">
            <ListTitle>The List</ListTitle>
            <div className="p-2"></div>
            <div className="flex flex-col w-full">
                <ListInputWidget className={inputStyle + " min-w-[100px] sm:min-w-[500px]"}/>
                <List></List>
            </div>
        </div>
    )
}

interface ListTitleProps {
    children: React.ReactNode 
}

export function ListTitle(props: ListTitleProps) {
    return (
        <div className="flex flex-row justify-center items-center">
            <h1 className="text-2xl font-bold">{props.children}</h1>
        </div>
    )
}