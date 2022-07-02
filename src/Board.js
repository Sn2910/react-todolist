import React from 'react'
import {MoreVertical} from "react-feather"
import Card from './Card'

function Board() {
  return (
    <div className="board">
     <div className="board_top">
      <p className="board_top_title">
        To Do
        <span>2</span>
        </p>
        <MoreVertical />
     
     </div>
     <div className="board_cards">
      <Card />
      {/* <h1>Card 1</h1>
      <h1>Card 2</h1> */}
     </div>

    
    </div>
  )
}

export default Board
