/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head'
import { Inter } from 'next/font/google'
import React, { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import 'reactjs-popup/dist/index.css'
import winnergraphic from '../../public/catpic.gif'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })
const button_style = ["border-2 border-slate-50 h-60 w-60","border-2 border-slate-50 h-60 w-60 bg-green-600 text-white text-9xl", "border-2 border-slate-50 h-60 w-60 bg-red-600 text-white text-9xl"]


export default function Home() {

  const [currentPlayer, setCurrentplayer] = useState(Math.round(Math.random()*1) === 1 ? "X" : "O");
  const [currentBoard, setCurrentboard] = useState([0,0,0,0,0,0,0,0,0]);
  const [popupwindow, setPopupwindow] = useState(false);
  const [winner, setWinner] = useState("");



  const Tictac = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(currentPlayer == "X"){
      const newBoard = [...currentBoard];
      if (currentBoard[Number((event.target as HTMLButtonElement).id)] == 0 && winner == "Undetermined"){
        newBoard[Number((event.target as HTMLButtonElement).id)] = 1;
        setCurrentboard(newBoard);
        setCurrentplayer("O");
      }
      else{
        setPopupwindow(true);
        setTimeout(() => {
          setPopupwindow(false);
        }, 3000);
      }
    }
    else{
      if(currentBoard[Number((event.target as HTMLButtonElement).id)] == 0 && winner == "Undetermined"){
      const newBoard = [...currentBoard];
newBoard[Number((event.target as HTMLButtonElement).id)] = 2;
      console.log(newBoard);
      setCurrentboard(newBoard);
      setCurrentplayer("X");
      }
      else{
        setPopupwindow(true);
        setTimeout(() => {
          setPopupwindow(false);
        }, 3000);
      }
    }
     
  }

  const Reset = () => {
    setCurrentboard([0,0,0,0,0,0,0,0,0]);
  }


  function Calculatewinner(){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      console.log("Value of i",i)
      const [a, b, c] = lines[i];
      console.log([a, b, c], i)
      if (currentBoard[a] === 1 && currentBoard[b] === 1 && currentBoard[c] === 1) {
      return "X"}
      else if (currentBoard[a] === 2 && currentBoard[b] === 2 && currentBoard[c] === 2){
         return "O"}

    };
    return null;
  
  }

  useEffect(() => {
    const w = Calculatewinner();
    console.log(w)
    if (w) {
      setWinner(w)
      return undefined;
    }

    if (!w) {
      setWinner("Undetermined");
    }
  }, [Calculatewinner]);

  return (
    <>
      <Head>
        <title>API Connections</title>
        <meta name="description" content="Helping non-technical people integrate applications" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className='flex content-center justify-center'>
      <h1 className='text-white text-5xl m-3'>Welcome to the Tic Tac Toe Game</h1>
      </div>
      <div className='flex content-center justify-center'>
      <p className='text-white text-4xl m-3'>It is {currentPlayer}s turn</p>
      </div>
      <div className='flex content-center justify-center'>
      <p className='text-white text-4xl m-3'>Winner is {winner}</p>
      </div>
      <div className='flex content-center justify-center'>
      {winner == "O" && <Image src={winnergraphic} alt="Is loading..."/>}
      {winner == "X" && <Image src={winnergraphic} alt="Is loading..."/>}
      </div>

      {popupwindow && (
       <div>
        <div className='text-2xl text-red-600 flex content-center justify-center'>
          You Cannot Do That
        </div>
        <div className='flex content-center justify-center'>
      </div>  
       </div>
      )}


      <div className='flex content-center justify-center m-3'>
        <button className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l border border-white font-medium rounded-lg text-xl px-5 py-2.5 text-center' onClick={Reset}>Reset</button>
      </div>
      <div className='flex content-center justify-center'>
      <div className='flex flex-col'>
       <button className={button_style[currentBoard[0]]} id="0" onClick={Tictac}></button>
       <button className={button_style[currentBoard[3]]} id="3" onClick={Tictac}></button>
       <button className={button_style[currentBoard[6]]} id="6" onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style[currentBoard[1]]} id="1" onClick={Tictac}></button>
       <button className={button_style[currentBoard[4]]} id="4" onClick={Tictac}></button>
       <button className={button_style[currentBoard[7]]} id="7" onClick={Tictac}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style[currentBoard[2]]} id="2" onClick={Tictac}></button>
       <button className={button_style[currentBoard[5]]} id="5" onClick={Tictac}></button>
       <button className={button_style[currentBoard[8]]} id="8" onClick={Tictac}></button>
       </div>
       </div>

      </main>
    </>
  )
}
