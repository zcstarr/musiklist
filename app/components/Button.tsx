'use client';
import React from 'react';

export interface ButtonProps {
    onClick: () => void;
    children?: React.ReactNode;
}



export const VoteButton = (props: ButtonProps) => {
    const { onClick, children } = props;
    return (
        <button className={ "border-slate-500 p-2 border-2"} onClick={onClick}>{children}</button>
    );
}

export const UpButton = (props: ButtonProps) => {
    const { onClick, children } = props;
    return (
        <VoteButton onClick={onClick}>Up</VoteButton>
    );
} 

export const DownButton = (props: ButtonProps) => {
    const { onClick, children } = props;
    return (
        <VoteButton onClick={onClick}>Down</VoteButton>
    );
} 