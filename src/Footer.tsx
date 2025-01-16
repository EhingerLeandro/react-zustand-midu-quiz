
import useDataQuestion from "./hooks/useDataQuestion.tsx";


const Footer = () => { 
  const {correct, incorrect, unanswered} = useDataQuestion();

  return (
    <footer style={{marginTop:"16px", color:"#999"}}>
        <strong>
            <span style={{color:"green"}}> &#10003; </span>{correct} correct  / 
            <span style={{color:"red"}}> &#10007; </span>{incorrect} incorrect /  
            Pending: {unanswered}
        </strong>
    </footer>
  )
}

export default Footer