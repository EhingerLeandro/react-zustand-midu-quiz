import {create} from 'zustand'
import {type Question} from '../types'
import confetti from "canvas-confetti"
import {persist} from 'zustand/middleware'

//This is the type of our store
interface State {
    questions: Question[]
    currentQuestion: number //This is the current position
    fetchQuestions: (limit: number) => Promise<void>;
    selectAnswer: (questionId: number, answerIndex: number) => void;
    goNextQuestion: () => void;
    goPreviousQuestion: () => void;
    goReset: () => void;
}

//Here we are creating our store
export const useQuestionsStore = create<State>()(persist((set, get) =>{
    return{
        //This is the initial state of our store
        loading:false,
        questions: [],
        currentQuestion: 0,

        //This section is for our actions
        fetchQuestions: async (limit: number) => {
            const res = await fetch("http://localhost:5173/data.json");
            const data = await res.json();
            //This part is used to reorder the questions
            const questions = data.sort(()=>Math.random() - 0.5).slice(0, limit);
            set({questions})
        },
        //Here we are using the structered clone
        selectAnswer: (questionId: number, answerIndex: number) => {
            const {questions}= get()
            //Here we are creating a deep copy of the questions array
            const newQuestions = structuredClone(questions);
            //In the next line we are finding the index of the question
            const questionIndex = newQuestions.findIndex(item => questionId === item.id);
            const questionInfo = newQuestions[questionIndex];
            //This part is used to know if the user answered correctly
            const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex;
            if(isCorrectUserAnswer) confetti();
            //Now we are updating the question, using the deep copy
            newQuestions[questionIndex] = {
                ...questionInfo,
                userSelectedAnswer: answerIndex,
                isCorrectUserAnswer
            }
            set({questions:newQuestions})
        },
        goNextQuestion: () => {
            const {questions, currentQuestion} = get();
            const nextQuestion = currentQuestion + 1
            if(questions.length > nextQuestion) {
                set({currentQuestion: nextQuestion})
            }
        },
        goPreviousQuestion: () => {
            const { currentQuestion } = get();
            const previousQuestion = currentQuestion - 1;
            if (previousQuestion >= 0) {
                set({ currentQuestion: previousQuestion });
            }
        },
        goReset: () => {
            set({questions:[], currentQuestion:0} )
        }

    }
},{
    name: 'questions-storage',
}
))
