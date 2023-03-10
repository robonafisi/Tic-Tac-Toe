import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const button_style = "border-2 border-slate-50 h-60 w-60"
const obutton_style = "border-2 border-slate-50 h-60 w-60 bg-green-600 text-white text-9xl"
const xbutton_style = "border-2 border-slate-50 h-60 w-60 bg-red-600 text-white text-9xl"


export default function Home() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentplayer] = useState(Math.round(Math.random()*1) === 1 ? "X" : "O");
  const [currentBoard, setCurrentboard] = useState([0,0,0,0,0,0,0,0,0]);



  const Tictac = event => {
    if(currentPlayer == "X"){
      console.log(event.target.id)
      setCurrentplayer("O");
    }
    else{
      console.log(event.target.id)
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
       <button className={button_style} id="1" onClick={Tictac}></button>
       <button className={button_style} id="4" onClick={Tictac}></button>
       <button className={button_style} id="7" onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style} id="2" onClick={Tictac}></button>
       <button className={button_style} id="5" onClick={Tictac}></button>
       <button className={button_style} id="8" onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style} id="3" onClick={Tictac}></button>
       <button className={button_style} id="6" onClick={Tictac}></button>
       <button className={button_style} id="9" onClick={Tictac}></button>
       </div>
       </div>

      </main>
    </>
  )
}
