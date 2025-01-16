import {useQuestionsStore} from "../store/questions";

const useDataQuestion = () => {
    const questions = useQuestionsStore(state=>state.questions);
    
    let correct=0;
    let incorrect=0;
    let unanswered=0;

    questions.forEach(question=>{
        const {userSelectedAnswer, correctAnswer, isCorrectUserAnswer} = question;
        if(userSelectedAnswer== null)  unanswered++;
        if(userSelectedAnswer === correctAnswer) correct ++;
        if(isCorrectUserAnswer !== undefined && !isCorrectUserAnswer) incorrect ++;
    })  
    return {correct, incorrect, unanswered}
}

export default useDataQuestion
