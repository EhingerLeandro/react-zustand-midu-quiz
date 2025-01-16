import { useState } from 'react'
import './App.css'
import JavascriptLogo from './JavascriptLogo'
import ButtonStart from './ButtonStart'
import {Container,Typography, Stack} from "@mui/material";
import {useQuestionsStore} from "./store/questions";
import Game from "./Game";

function App() {
  const questions = useQuestionsStore((state) => state.questions)

  return (
    <main>
      <Container>
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center ">
          <JavascriptLogo />
          <Typography variant="h2" component="h1">
            Javascript Quiz
          </Typography>
        </Stack>
        {questions.length === 0 && <ButtonStart/> }
        {questions.length > 0 && <Game/>}
      </Container>
    </main>
  )
}

export default App
