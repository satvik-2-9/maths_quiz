import React, { useState } from 'react'
import "./Addition.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components';

const Button = styled.button`
  min-width: 100px;
  padding: 10px 26px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  margin-right:10px;
  margin-bottom:10%;
  margin-top:10%
`;

function Addition() {
    
    const [time, setTime] = React.useState(0); 
    const [timerOn, setTimerOn] = React.useState(false); 
    const [first, setfirst] = useState(0);
    const [second, setsecond] = useState(0);
    const [sum, setsum] = useState(0);
    const [total, setTotal] = useState(0); 
    const [over, setOver] = useState(false);
    const [ct, setct] = useState(0); 

    React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
    

    function g() {
          
        setTimerOn(true);
        setfirst(Math.floor(Math.random() * 100)); 
        setsecond(Math.floor(Math.random() * 100));          
  }
  function handleclick(e) {
    e.target.value = "";
    if (Number(sum) ===  first  +  second ) {
      setct(ct + 1); 
    }
    setTotal(total + 1);
    if (total === 10) {
      
      setOver(true);
      setTimerOn(false);
      setOver(true);
      setTotal(0);
      return;
    }
    g(); 
  }
  function p() {
    window.location.href = "./"; 
  }


  return (
      
    <div className="Timers">
    <h3 className="add_game">Addition Game</h3>
    <div className="gp">
      {timerOn && (
            <div>
            <h3>{first}</h3>
           <h4>+</h4> <h3>{second}</h3>
            <input className="inp" onChange={(e)=>setsum(e.target.value)}></input>
            <Button  onClick={handleclick} >Submit</Button>

            </div>
          )}

          {over && (
            <h5>Congratulations, You got {ct} questions out of 10 correct in {<span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}: {("0" + ((time / 10) % 100)).slice(-2)} </span>} seconds.
            Click on Reset to play again!
            <button onClick={p} className="ret"> click here to return home</button>
            </h5>
          )}

   <div className="fg">
          
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
          
        {!timerOn && time === 0 && (
          <Button onClick={()=>{g()}} >Start</Button>
        )}
        {timerOn && <Button onClick={() => setTimerOn(false)}>Stop</Button>}
        {!timerOn && time > 0 && (
          <Button onClick={() => window.location.href="./Addition"}>Reset</Button>
        )}
        {!timerOn && time > 0 && !over && (
          <Button onClick={() => setTimerOn(true)}>Resume</Button>
        )}
       

          </div>
        </div>
      </div>
        
    </div>
    )
}

export default Addition
