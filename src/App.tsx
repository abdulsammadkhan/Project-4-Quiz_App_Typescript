import React, { useEffect, useState } from 'react';
import './App.css';
import { getQuizdetails } from './Quiz-services/quiz_services';
import { Quiestion_Type } from "./Quiz_types/Quiz_types";
import QusetioCard from './Components/Card';

function App() {

  let [quiz, setQuiz] = useState<Quiestion_Type[]>([]);
  let [currentStep,setCurrentstep]=useState(0);
  let marks=useState(0);

  useEffect(() => {

    const fetchData = async () => {
      const data: Quiestion_Type[] = await getQuizdetails(5, 'easy');
      setQuiz(data)
      console.log(data)
    }
    fetchData();

  }, [])

const handlestep=(e:React.FormEvent<EventTarget>)=>{
  e.preventDefault();
  if(currentStep !== quiz.length-1)
  {
  setCurrentstep(++currentStep)
  
}
else{
  alert(`Quiz Completed...\n Total Marks: ${marks[0]} Out of ${quiz.length}`)
  marks[1](0);
  setCurrentstep(0);
}
}


if(!quiz.length)
return <h3>Laoding...</h3>


  return (
    <div className="main">
    <h1 id="heading">Quiz App</h1>

      <QusetioCard option={quiz[currentStep].options} questions={quiz[currentStep].question} callback={handlestep} answer={quiz[currentStep].answer} marks={marks} />
    </div>
  );
}

export default App;
