import { type } from "os";

import React from 'react';

export type  Quiz = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers:string[] ,
    question: string,
    type: string
}

export type Quiestion_Type={
    question:string,
    answer:string,
    options:string[]
}
export type propsType={
    option:string[],
    questions:string,
    callback:(e:React.FormEvent<EventTarget>)=>void,
    answer:string,
    marks:any
}