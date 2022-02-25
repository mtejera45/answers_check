import React from 'react'
import '../style.css';


export default function NextExerciseButton({answer_one, answer_two}) {    

    const[button, setButton] = React.useState(localStorage.getItem("button"));

    React.useEffect(() => {
        if(answer_one && answer_two === "true"){ //It can be inprove it by the .every() method.
          setButton(true)
          localStorage.setItem("button", true)
        } else {
          setButton(false)
        }
      },[answer_one, answer_two])

      const styles = {
        backgroundColor: localStorage.getItem("button")? "#8A0DFF" : "#F8F1FF",
        color: localStorage.getItem("button")? "#FFFFFF" : "#A9A9A9",
      }

return (
    <button 
        className='buttonNextExercise'
        answer_one={answer_one}
        answer_two={answer_two}
        style={styles}
    >Next 
    </button>
  )
}
