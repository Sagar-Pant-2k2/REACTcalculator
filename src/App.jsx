import { Children, useReducer } from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Title = styled.h1`
  color: white;
`
const Container = styled.div`

    height: 100vh;
    width: 100vw;
    background: linear-gradient(to right,#237cca,green);
    color: #212129;
    display: flex; flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
`

const CalculatorGrid = styled.div`
margin: 10px;
height: 500px;
width: 400px;
display: grid;
grid-template-columns: repeat(4,1fr);
grid-template-rows: repeat(7,1fr);
`
const Output = styled.div`
  word-wrap: break-word;
  grid-column: span 4;
  grid-row: span 2;
  background-color: #202224;
  color: white;
  direction: rtl;
  padding:10px;
  display: grid;
  grid-template-rows: repeat(3,1fr);
  

`

const Prev = styled.div`
 word-wrap: break-word;
  color: #9dc6c6 ;
  display: flex;
  align-items: center;
  width: 100%;
  /* background-color:teal; */
  font-size: 18px;
`
const Curr = styled.div`
 word-wrap: break-word;
display: flex;
align-items: center;
/* background-color: red; */
font-size: 24px;
width:100%;
grid-row: span 2;
`







const Button = (props)=>{
  return <button value={props.children} onClick={()=>props.setCurrVal(currVal + props.children)}>{props.children}</button>
}
const App = ()=>{
  const [currVal,setCurrVal] = useState("curr");
  const [prevVal,setPrevVal] = useState("prev");

  const appendNum = ()=>{setCurrVal(currVal+10)};
  const deleteNum = ()=>{setCurrVal(currVal.slice(0,-1))}


  return (
    <Container>
      <Title>React Calculator</Title>
      <CalculatorGrid>
       
        
       <Output>
       <Prev>
       {prevVal}
       </Prev>
       <Curr>
       {currVal} 
       </Curr>
       
       </Output>
        <button style={{gridColumn:"span 2"}}>AC</button>
      <button onClick={()=>deleteNum()}>DEL</button>
        <button>/</button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>1</Button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>2</Button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>3</Button>
        <button>+</button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>4</Button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>5</Button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>6</Button>
        <button>-</button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>7</Button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>8</Button>
        <Button setCurrVal={setCurrVal} currVal={currVal}>9</Button>
        <Button>*</Button>
        <Button>.</Button>
      <Button setCurrVal={setCurrVal} currVal={currVal}>0</Button>
        <button style={{gridColumn:"span 2"}}>=</button>
      </CalculatorGrid>
    </Container>
  )
}

export default App;
