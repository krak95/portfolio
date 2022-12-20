import { useEffect, useState } from "react";
import $ from 'jquery'
import Tile from "./tile"

function Board(){

const x = ['1','2','3','4','5','6','7','8']
const y = ['1','2','3','4','5','6','7','8']

const board = [];
const pieces = [];

pieces.push({piece:'tower', color:'black', x:0,y:0})
pieces.push({piece:'tower', color:'black', x:0,y:7})
pieces.push({piece:'bknight', color:'black', x:0,y:1})
pieces.push({piece:'bknight', color:'black', x:0,y:6})
pieces.push({piece:'bbish', color:'black', x:0,y:2})
pieces.push({piece:'bbish', color:'black', x:0,y:5})
pieces.push({piece:'bqueen', color:'black', x:0,y:3})
pieces.push({piece:'bking', color:'black', x:0,y:4})

for(let i = 0; i<x.length;i++){
    pieces.push({piece:'pawn', color:'black', x:1,y:i})
}

pieces.push({piece:'tower', color:'white', x:7,y:0})
pieces.push({piece:'tower', color:'white', x:7,y:7})
pieces.push({piece:'bknight', color:'white', x:7,y:1})
pieces.push({piece:'bknight', color:'white', x:7,y:6})
pieces.push({piece:'bbish', color:'white', x:7,y:2})
pieces.push({piece:'bbish', color:'white', x:7,y:5})
pieces.push({piece:'bqueen', color:'white', x:7,y:3})
pieces.push({piece:'bking', color:'white', x:7,y:4})

for(let i = 0; i<x.length;i++){
    pieces.push({piece:'pawn', color:'white', x:6,y:i})
}

const [playstate, setPlaystate] = useState('pick')

const pick = (e)=>{
    console.log('pick')
    e.stopPropagation()
    const el = e.target
    const picked = 
        {
            x : e.target.getAttribute('x'),
            y : e.target.getAttribute('y'),
            tilex : e.target.getAttribute('tile-x'),
            tiley : e.target.getAttribute('tile-y'),
            piece : e.target.getAttribute('piece'),
            color : e.target.getAttribute('color'),
        }
        localStorage.setItem('picked',JSON.stringify(picked))
        if(picked.piece === 'pawn' && picked.color === 'black'){
            const xmove1 = parseInt(picked.x)+1;
            const xmove2 = parseInt(picked.x)+2;
            console.log('x',xmove1)
            console.log('x',xmove2)
            console.log('y',picked.y)
        $('[tile-x='+picked.x+'][tile-y='+picked.y+']').addClass('possibleMoves')
        $('[tile-x='+xmove1+'][tile-y='+picked.y+']').addClass('possibleMoves')
        $('[tile-x='+xmove2+'][tile-y='+picked.y+']').addClass('possibleMoves')
    }
    setPlaystate('play')
}
const play = (e) =>{
    console.log('play')
    const el = e.target
    setPlaystate('pick')
}
    for (let i = 0; i < x.length; i++) {
        for(let j = 0; j < y.length; j++){
            const number = j+i+2;
           
            let piece;
            let color;
            pieces.forEach(el => {
                if(el.x===i && el.y ===j){
                    piece = el.piece
                    color = el.color
                }
            });
            board.push(<Tile key={j+' '+i} onClick={playstate === 'pick' ? pick : play} x={i} y={j} piece={piece} number={number} color={color}/>)
        }
    }

    return(
        <>
        <div className="chessboard">{board}</div>
        </>
    ) 
}

export default Board;