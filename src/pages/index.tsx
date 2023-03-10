import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const button_style = ["border-2 border-slate-50 h-60 w-60","border-2 border-slate-50 h-60 w-60 bg-green-600 text-white text-9xl", "border-2 border-slate-50 h-60 w-60 bg-red-600 text-white text-9xl"]


export default function Home() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentplayer] = useState(Math.round(Math.random()*1) === 1 ? "X" : "O");
  const [currentBoard, setCurrentboard] = useState([0,0,0,0,0,0,0,0,0]);



  const Tictac = () => {
    if(currentPlayer == "X"){
      const newBoard = [...currentBoard];
      newBoard[event.target.id] = 1;
      setCurrentboard(newBoard);
      setCurrentplayer("O");
    }
    else{
      const newBoard = [...currentBoard];
      newBoard[event.target.id] = 2;
      console.log(newBoard);
      setCurrentboard(newBoard);
      setCurrentplayer("X");
    }
     
  }

  return (
    <>
      <Head>
        <title>API Connections</title>
        <meta name="description" content="Helping non-technical people integrate applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className='text-white'>Welcome to the Tic Tac Toe Game</h1>
      <p className='text-white'>It is {currentPlayer}s turn!</p>
      <div className='flex content-center justify-center'>
      <div className='flex flex-col'>
       <button className={button_style[currentBoard[0]]} id="1" onClick={Tictac}></button>
       <button className={button_style[currentBoard[1]]} id="4" onClick={Tictac}></button>
       <button className={button_style[currentBoard[2]]} id="7" onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style[currentBoard[3]]} id="2" onClick={Tictac}></button>
       <button className={button_style[currentBoard[4]]} id="5" onClick={Tictac}></button>
       <button className={button_style[currentBoard[5]]} id="8" onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style[currentBoard[6]]} id="3" onClick={Tictac}></button>
       <button className={button_style[currentBoard[7]]} id="6" onClick={Tictac}></button>
       <button className={button_style[currentBoard[8]]} id="9" onClick={Tictac}></button>
       </div>
       </div>

      </main>
    </>
  )
}
