
import { IconButton, Stack, List, Button,
        Card, Typography, ListItem, ListItemText,
        ListItemButton} from '@mui/material';
import {useQuestionsStore} from "./store/questions";
import {type Question as QuestionType} from "./types";
import SyntaxHighLighter from "react-syntax-highlighter";
import {gradientDark} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Footer from "./Footer";


const Question=({info}:{info:QuestionType})=>{
    const selectAnswer = useQuestionsStore(state=>state.selectAnswer);
    

    const handleClick=(ind:number)=>{
        selectAnswer(info.id, ind);
    }

    const getBackgroundColor=(info:QuestionType, index:number)=>{
        const {isCorrectUserAnswer, userSelectedAnswer, correctAnswer} = info;
       if(userSelectedAnswer == null) return "transparent";
       if(index !== correctAnswer && index !== userSelectedAnswer) return "transparent";
       if(index === userSelectedAnswer && !isCorrectUserAnswer) return "red";
       if(index === correctAnswer ) return "green";
       
       return "transparent";
    }

    return(
        <Card variant="outlined" sx={{bgcolor:"#222", p:"10px", textAlign:"left"}}>
            <Typography variant="h5" >
                {info.question}
            </Typography>
            <SyntaxHighLighter language="javascript" style={gradientDark} >
                {info.code}
            </SyntaxHighLighter>
            <List sx={{bgcolor:"#333"}}>
                {info.answers.map((answer, index)=>(
                    <ListItem key={index} divider>
                        <ListItemButton 
                                disabled={info.userSelectedAnswer != null}
                                onClick={()=>handleClick(index)}
                                sx={{backgroundColor: getBackgroundColor(info, index) }}>
                            <ListItemText primary={answer} sx={{textAlign:"center"}}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

const Game = () => {
    const questions = useQuestionsStore((state)=>state.questions);
    const currentQuestion = useQuestionsStore((state)=>state.currentQuestion)
    const questionInfo = questions[currentQuestion];
    const goNextQuestion = useQuestionsStore(state=>state.goNextQuestion);
    const goPreviousQuestion = useQuestionsStore(state=>state.goPreviousQuestion);
    const goReset = useQuestionsStore(state=> state.goReset)
    console.log(questions);

    return (
        <>
            <Stack direction="row" gap={2} alignItems={"center"} 
                    justifyContent="center" marginBottom="10px">
                <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIosNew></ArrowBackIosNew>
                </IconButton>
                {currentQuestion + 1} / {questions.length}
                <IconButton onClick={goNextQuestion} disabled={currentQuestion === questions.length - 1}>
                    <ArrowForwardIos></ArrowForwardIos>
                </IconButton>
            </Stack>
            <Question info={questionInfo}/>
            <Footer/>
            <Button onClick={goReset} style={{color:"#fff"}}>
                Reset
            </Button>
        </>
    )
}

export default Game;