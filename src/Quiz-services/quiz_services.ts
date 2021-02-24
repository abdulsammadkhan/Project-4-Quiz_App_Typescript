import {Quiz,Quiestion_Type} from './../Quiz_types/Quiz_types';

const shuffleArray=(array: any[])=>
[...array].sort(()=>Math.random() - 0.5);

export const getQuizdetails=async(total:number,level:string):Promise<Quiestion_Type[]>=>{
const res=await fetch(`https://opentdb.com/api.php?amount=${total}&difficulty=${level}&type=multiple`);
let {results}=await res.json();
console.log("Results==>",results);

const quiz:Quiestion_Type[]=results.map((questionobj:Quiz)=>{

    return{
        question:questionobj.question,
        answer:questionobj.correct_answer,
        options:shuffleArray(questionobj.incorrect_answers.concat(questionobj.correct_answer))
    }
})

return quiz;
}