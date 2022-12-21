import { useEffect, useState, useRef } from "react";
import $ from 'jquery'
import Tile from "./tile"
import { act } from "react-dom/test-utils";

function Board(){
const chessboardRef = useRef(null)
const x = ['1','2','3','4','5','6','7','8']
const y = ['1','2','3','4','5','6','7','8']

console.log("chessboard",chessboardRef)

const board = [];
const pieces = [];

pieces.push({piece:'bltower', color:'black', x:0,y:0})
pieces.push({piece:'brtower', color:'black', x:0,y:7})
pieces.push({piece:'blknight', color:'black', x:0,y:1})
pieces.push({piece:'brknight', color:'black', x:0,y:6})
pieces.push({piece:'blbish', color:'black', x:0,y:2})
pieces.push({piece:'brbish', color:'black', x:0,y:5})
pieces.push({piece:'bqueen', color:'black', x:0,y:3})
pieces.push({piece:'bking', color:'black', x:0,y:4})

for(let i = 0; i<x.length;i++){
    pieces.push({piece:'bpawn'+[i], color:'black', x:1,y:i})
}

pieces.push({piece:'wltower', color:'white', x:7,y:0})
pieces.push({piece:'wrtower', color:'white', x:7,y:7})
pieces.push({piece:'wlknight', color:'white', x:7,y:1})
pieces.push({piece:'wrknight', color:'white', x:7,y:6})
pieces.push({piece:'wlbish', color:'white', x:7,y:2})
pieces.push({piece:'wrbish', color:'white', x:7,y:5})
pieces.push({piece:'wqueen', color:'white', x:7,y:3})
pieces.push({piece:'wking', color:'white', x:7,y:4})

for(let i = 0; i<x.length;i++){
    pieces.push({piece:'wpawn'+[i], color:'white', x:6,y:i})
}

const [playstate, setPlaystate] = useState('pick')
let activeP
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

        if(picked.piece.includes('pawn') && picked.color.includes('black')){
            const xmove1 = parseInt(picked.x)+1;
            const xmove2 = parseInt(picked.x)+2;
            console.log('x',xmove1)
            console.log('x',xmove2)
            console.log('y',picked.y)
            $('[tile-x='+picked.x+'][tile-y='+picked.y+']').addClass('possibleMoves')
            $('[tile-x='+xmove1+'][tile-y='+picked.y+']').addClass('possibleMoves')
            $('[tile-x='+xmove2+'][tile-y='+picked.y+']').addClass('possibleMoves')
        }
        activeP = el
}
const play = (e) =>{
if(activeP){
    const chessboard = chessboardRef.current
    const stored = JSON.parse(localStorage.getItem('picked'))
    const elpiece = document.querySelector('[piece='+stored.piece+']')
    const mousex = e.clientX -30
    const mousey = e.clientY -30
    elpiece.style.left = `${mousex}px`
    elpiece.style.top = `${mousey}px`
    elpiece.style.position = 'absolute'
    $('.chessboard div').removeClass('possibleMoves')
}
}

const drop = (e) =>{
    activeP=null
}

const mousepos = (e) =>{
    const mousex = e.clientX
    const mousey = e.clientY
    console.log(mousex,mousey)
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
            board.push(<Tile key={j+' '+i} onMouseMove={play} onMouseUp={drop} onMouseDown={pick} x={i} y={j} piece={piece} number={number} color={color}/>)
        }
    }

    return(
        <>
        <div className="chessboard" ref={chessboardRef}   >{board}</div>
        </>
    ) 
}

export default Board;