import React from 'react'
import {Button} from "@mui/material";
import {useQuestionsStore} from "./store/questions";

const ButtonStart = () => {
  const fetchQuestions = useQuestionsStore((state)=> state.fetchQuestions)
  const handleClick = () => {
    fetchQuestions(10)
  }

  return (
    <div>
        <Button onClick={handleClick}>
            Start Again
        </Button>
    </div>
  )
}

export default ButtonStart
