import Head from 'next/head'
import { Inter } from 'next/font/google'
import React from 'react'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const button_style = "border-2 border-sky-500 h-60 w-60"

export default function Home() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentplayer] = useState(Math.round(Math.random()*1) === 1 ? "X" : "O");



  function Tictac() {
    if(currentPlayer == "X"){
      setCurrentplayer("O");
    }
    else{
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
      <h1>Welcome to the Tic Tac Toe Game</h1>
      <p>It is {currentPlayer}s turn!</p>
      <div className='flex content-center justify-center'>
      <div className='flex flex-col'>
       <button className="border-2 border-sky-500 h-60 w-60 bg-green-600 text-white text-9xl" onClick={Tictac}>O</button>
       <button className="border-2 border-sky-500 h-60 w-60 bg-red-600 text-white text-9xl" onClick={Tictac}>X</button>
       <button className={button_style} onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style} onClick={Tictac}></button>
       <button className={button_style} onClick={Tictac}></button>
       <button className={button_style} onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style} onClick={Tictac}></button>
       <button className={button_style} onClick={Tictac}></button>
       <button className={button_style} onClick={Tictac}></button>
       </div>
       </div>

      </main>
    </>
  )
}
