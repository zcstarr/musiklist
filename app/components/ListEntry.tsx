'use client';
import { useContext } from "react";
import { DownButton, UpButton } from "./Button";
import { linkStyle } from "./Link";
import { AppContext } from "../state/global";

interface ListEntryProps {
    link: string;
    entry: any;
    children?: React.ReactNode
}

export const ListEntryView = (props: ListEntryProps) => {
    const {children} = props;
    return (
        <div className="pt-2">
            {children}
        </div>
    )
}

export const ListLinkElement = (props: ListEntryProps) => {
    const {link} = props;
    <a href={link}></a>
}
export const ListEntryControlBar = (props: ListEntryProps) => {
    const {entry} = props;
    const {appState,dispatch} = useContext(AppContext)
   return (
   <div className="flex flex-row justify-between h-20 border w-full items-end p-2">
             <div>
                <a className={linkStyle + " text-sm"} href={entry.link}>{entry.link}</a>
            </div>
            <div className="text-sm">
                {entry.up ? entry.up : 0} Up
            </div>
            <div className="text-sm">
                {entry.down ? entry.down : 0} Down
            </div>
             <div className= "flex flex-row justify-between">
                <div className="mr-2"> 
                <UpButton onClick={() => dispatch({type: "UPDATE_LIST", data: {...entry, up : entry.up ? entry.up + 1 : 1}})}/>
                </div>
                <div className=""> 
                <DownButton onClick={() => dispatch({type: "UPDATE_LIST", data: {...entry, down:entry.down ? entry.down + 1 : 1}})}/>
                </div>
             </div>
   </div>
   ) 

}

export const ListEntry = (props: ListEntryProps) => {
    const {children, entry} = props;
    return ( 
        <div className="mt-2 flex flex-col w-full items-start space-between border-2 border-slate-300">
            <div className={"px-2 text-xl"}>
            <ListEntryView entry={entry} link={entry.link}>{children}</ListEntryView>
            </div>
            <ListEntryControlBar entry={entry} link={entry.link}/>
        </div>
    )
}