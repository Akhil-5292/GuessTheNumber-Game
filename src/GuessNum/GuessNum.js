// import "./styles.css";
import style from './GuessNum.module.css'
import React, { useState } from 'react'
export default function GuessNum() {
  const [num,setNum]=useState('')
  const [rnd,setRnd]=useState(Math.floor(Math.random()*100))
  console.log(rnd)
  const handleChange=(e)=>{
    setNum(e.target.value)
  }
  const guess=()=>{
    if(num===rnd){
      alert('you won')
    }else if(num>rnd){
      alert('too high')
    }else{
      alert('too low')
    }
  }
  return (
    <div className={style.wrapper}>
      <h3>Guess The Number Game</h3>
      <input className={style.input} placeholder='Guess The Num' onChange={handleChange}/>
      <button className={style.btn} onClick={guess}>Guess</button>
    </div>
  );
}
