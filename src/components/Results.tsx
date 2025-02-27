import { Question } from "@/types/Question"

type Props = {
    answers: number[]
    questions: Question[]
}

export const Results = ({ answers, questions }:Props)=> {

    return(

        <div>
            <div className="text-xl mb-5 font-bold">Resultado do Quiz</div>
            {questions.map((item,index) => (

                <div key={index}>

                    <div className="mb-1 font-bold">{index+1}. {item.question}</div>
                    <div className="mb-4 flex">
                        <span className={`${item.answer === answers[index] ? "text-green-500" : "text-red-500"}`}
                        >({item.answer === answers[index] ? "Acertou" : "Errou"})</span>
                        <div>{`: ${item.options[item.answer]}`}</div>
                    </div>

                </div>
            ))}

        </div>

    )

}