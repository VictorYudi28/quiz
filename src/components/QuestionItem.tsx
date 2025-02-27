import { Question } from "@/types/Question"
import { use, useState } from "react"

type Props = {
    question: Question,
    count: number,
    handleAnswered: (index: number)=> void
}

export const QuestionItem = ({ question, count, handleAnswered }:Props)=> {

    const [selectedAnswer,setSelectetAnswer] = useState<number | null>(null);

    const checkQuestion = (index: number)=> {

        if(selectedAnswer === null){
            setSelectetAnswer(index)
        }

        setTimeout(()=>{
            handleAnswered(index);
            setSelectetAnswer(null)
        },500)
        

    }

    return(
        
        <div>
            <div className="text-xl font-bold mb-4">{`${count+1}. ${question.question}`}</div>

            {question.options.map((item,index) => (

                <div 
                className=
                {`
                    ${selectedAnswer !== null ? 'pointer-events-none hover:opacity-100' : 'hover:opacity-90'}
                    ${selectedAnswer !== null && selectedAnswer === question.answer && index === selectedAnswer && 'bg-green-700'}
                    ${selectedAnswer !== null && selectedAnswer !== question.answer && index === selectedAnswer && 'bg-red-700'}
                    mb-3 p-2 rounded-md cursor-pointer text-white bg-yellow-500
                    
                `}
                key={index}
                onClick={()=> checkQuestion(index)}
                >{item}</div>

            ))}

        </div>

    )

}