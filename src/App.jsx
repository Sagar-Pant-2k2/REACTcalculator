import { useReducer } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Container from './components/Container'
import Output from './components/Output'
import Prev from './components/Prev'
import Curr from './components/Curr'
import BigBox from './components/BigBox'
import Keys from './components/Keys'
import reducer from './reducers/reducer'

 
  
export default ()=>{
    const [state,dispatch] = useReducer(reducer,{curr:null,prev:null,operator:undefined});
    return (
        <BigBox>

    <Container>
        <Output>
            <Prev>{state.prev}</Prev>
            <Curr>{state.curr}</Curr>
        </Output>
        <Keys>
        <Button onClick={()=>dispatch({type:"CLEAR"})}>AC</Button>
        <Button onClick={()=>dispatch({type:"DELETE"})}>DEL</Button>
        <Button onClick={() => dispatch({ type: 'OPERATOR', value: '/' })}>/</Button>
        <Button onClick={() => dispatch({ type: 'OPERATOR', value: '*' })}>*</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:1})}>1</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:2})}>2</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:3})}>3</Button>
        <Button onClick={() => dispatch({ type: 'SUBT', value: '-' })}>-</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:4})}>4</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:5})}>5</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:6})}>6</Button>
        <Button style={{gridRow: "span 2"}} onClick={() => dispatch({ type: 'OPERATOR', value: '+' })}>+</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:7})}>7</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:8})}>8</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:9})}>9</Button>
        <Button onClick={()=>dispatch({type:"ADD_DIGIT",value:"."})}>.</Button>
        <Button style={{gridColumn: "span 2"}}onClick={()=>dispatch({type:"ADD_DIGIT",value:0})}>0</Button>
        <Button onClick={() => dispatch({ type: 'EQUALS' })}>=</Button>
        </Keys>
    </Container>
        </BigBox>)
}