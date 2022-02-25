import React from 'react'
import {Label} from '../element-style';

export default function Check({label, placeholder, name, answerState, answerSetState, expresionRegular, type}) {    

const onChange = (e)=>{
    answerSetState({
        ...answerState,
        checkAnswerString: e.target.value
    })
}
const validation = () => {
    if(expresionRegular){
	    if(expresionRegular.test(answerState.checkAnswerString)){
            answerSetState({
                ...answerState, 
                checkAnswerTrueFalse: "true"});
	    }else{
            answerSetState({
                ...answerState, 
                checkAnswerTrueFalse: "false"});
	    }
	}
} 
return (
    <div>
        <form>
            <Label htmlFor={name} valid={answerState.checkAnswerTrueFalse}>{label}
                <input
                className='input-box'
                type={type}
                placeholder={placeholder}
                id={name}
                value={answerState.checkAnswerString}
                valid={answerState.checkAnswerTrueFalse}
                onChange={onChange}
                onBlur={validation}
                />
            </Label>
        </form>
    </div>
  )
}
