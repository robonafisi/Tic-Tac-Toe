import Head from 'next/head'
import { Inter } from 'next/font/google'
import { React, useState }

const inter = Inter({ subsets: ['latin'] })
const button_style = "border-2 border-sky-500 h-60 w-60"

export default function Home() {

  

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
      <div className='flex content-center justify-center'>
      <div className='flex flex-col'>
       <button className={button_style} onClick={Clicked_toe}></button>
       <button className={button_style} onClick={Clicked_toe}></button>
       <button className={button_style} onClick={Clicked_toe}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style} onClick={Clicked_toe}></button>
       <button className={button_style} onClick={Clicked_toe}></button>
       <button className={button_style} onClick={Clicked_toe}></button>
       </div>
       <div className='flex flex-col'>
       <button className={button_style} onClick={Clicked_toe}></button>
       <button className={button_style} onClick={Clicked_toe}></button>
       <button className={button_style} onClick={Clicked_toe}></button>
       </div>
       </div>

      </main>
    </>
  )
}
