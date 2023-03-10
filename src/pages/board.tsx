import useState from 'react'
import React from 'react'


function Clicked_toe() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [currentPlayer, setCurrentplayer] = useState<'X' | 'O'>(
      Math.round(Math.random() * 1) === 1 ? "X" : "O"
    );
  return (
    <div>
      <p>It is {currentPlayer}s turn!</p>
    </div>
  )
}

export default Clicked_toe