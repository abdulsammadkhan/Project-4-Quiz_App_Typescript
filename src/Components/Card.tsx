import React, { useState } from 'react';
import { propsType } from './../Quiz_types/Quiz_types';
import './../App.css';


const QusetioCard: React.FC<propsType> = ({ option, questions, callback, answer, marks }) => {
    let [correct, setCorrect] = useState("");



    console.log(questions, option,answer);

     const result=()=>
     {
         if(correct===answer)
         {
             marks[1](++marks[0])
         }
         
         
     }

    return (
        <div className="card-container">
            <div className="questions">
                {questions}

            </div>
            <br/><br/>
            <form onSubmit={callback}>

                {option.map((v: string, i: number) => {
                    return (
                        <div key={i}>
                            <label>
                                <input type="radio" value={v} name="opt" onChange={(e) => setCorrect(e.target.value)} required checked={correct===v} className="radio" />
                                {v}
                            </label>
                        </div>

                    )
                })}

                 <br/><br/><br/><br/>
                
                 <div id="button">
                <input type="submit" onClick={result}   />
                </div>
            </form>




        </div>
    )
}
export default QusetioCard;