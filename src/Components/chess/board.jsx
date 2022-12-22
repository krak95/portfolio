import { useEffect, useState, useRef } from "react";
import $ from 'jquery'
import Tile from "./tile"

function Board(){
const chessboardRef = useRef(null)
const x = ['1','2','3','4','5','6','7','8']
const y = ['1','2','3','4','5','6','7','8']

console.log("chessboard",chessboardRef)

const board = [];
const initialState = [] ;
useEffect(()=>{

    initialState.push({piece:'bltower', color:'black', x:0,y:0})
    initialState.push({piece:'brtower', color:'black', x:0,y:7})
    initialState.push({piece:'blknight', color:'black', x:0,y:1})
    initialState.push({piece:'brknight', color:'black', x:0,y:6})
    initialState.push({piece:'blbish', color:'black', x:0,y:2})
    initialState.push({piece:'brbish', color:'black', x:0,y:5})
    initialState.push({piece:'bqueen', color:'black', x:0,y:3})
    initialState.push({piece:'bking', color:'black', x:0,y:4})
    for(let i = 0; i<x.length;i++){
        initialState.push({piece:'bpawn'+[i], color:'black', x:1,y:i})
    }
    initialState.push({piece:'wltower', color:'white', x:7,y:0})
    initialState.push({piece:'wrtower', color:'white', x:7,y:7})
    initialState.push({piece:'wlknight', color:'white', x:7,y:1})
    initialState.push({piece:'wrknight', color:'white', x:7,y:6})
    initialState.push({piece:'wlbish', color:'white', x:7,y:2})
    initialState.push({piece:'wrbish', color:'white', x:7,y:5})
    initialState.push({piece:'wqueen', color:'white', x:7,y:3})
    initialState.push({piece:'wking', color:'white', x:7,y:4})
    for(let i = 0; i<x.length;i++){
        initialState.push({piece:'wpawn'+[i], color:'white', x:6,y:i})
    }
},[initialState])


const [playstate, setPlaystate] = useState('pick')
const [activePiece, setActivepiece] = useState(null)
const [gridX, setgridX] = useState(0)
const [gridY, setgridY] = useState(0)
const [pieces, setPieces] = useState(initialState)

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
            const chessboard = chessboardRef.current
            const x = e.clientX - 30
            const y = e.clientY - 30
            el.style.left = `${x}px`
            el.style.top = `${y}px`
            el.style.position = 'absolute'
            const xmove1 = parseInt(picked.x)+1;
            const xmove2 = parseInt(picked.x)+2;
            console.log('x',xmove1)
            console.log('x',xmove2)
            console.log('y',picked.y)
            $('[tile-x='+picked.x+'][tile-y='+picked.y+']').addClass('possibleMoves')
            $('[tile-x='+xmove1+'][tile-y='+picked.y+']').addClass('possibleMoves')
            $('[tile-x='+xmove2+'][tile-y='+picked.y+']').addClass('possibleMoves')
        }
        setActivepiece(el)
}
const play = (e) =>{
    if(activePiece){
    const chessboard = chessboardRef.current
    setgridY(Math.floor((e.clientX - chessboard.offsetLeft)/80))
    setgridX(Math.abs(Math.ceil((e.clientY-chessboard.offsetTop - 640) / 80)))
    const stored = JSON.parse(localStorage.getItem('picked'))
    const elpiece = document.querySelector('[piece='+stored.piece+']')
    const x = e.clientX - 30
    const y = e.clientY - 30
    elpiece.style.left = `${x}px`
    elpiece.style.top = `${y}px`
    elpiece.style.position = 'absolute'
    const minX = chessboard.offsetLeft
    const minY = chessboard.offsetTop
    const maxX = chessboard.offsetLeft + chessboard.clientWidth - 58
    const maxY = chessboard.offsetTop + chessboard.clientHeight - 58
    $('.chessboard div').removeClass('possibleMoves')
    if(x < minX){
        activePiece.style.left = `${minX}px`
    }
    else if(x > maxX){
        activePiece.style.left = `${maxX}px`
    }
    else{
        activePiece.style.left = `${x}px`
    }
    if(y < minY){
        activePiece.style.top = `${minY}px`
    }
    else if(y > maxY){
        activePiece.style.top = `${maxY}px`
    }
    else{
        activePiece.style.top = `${y}px`
    }

}
}

const drop = (e) =>{
    const chessboard = chessboardRef.current
    if(activePiece && chessboard){
        const y = Math.floor((e.clientX - chessboard.offsetLeft)/80)
        const x = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 640) / 80))
        console.log(x,y)
        console.log(gridX,gridY)
    setPieces((value) =>{
        const pieces = value.map((p)=>{
            if(p.y === gridY && p.x === gridX){
                p.x = x
                p.y = y
            }
            return p
        })
        return pieces
    })
    setActivepiece(null)
    }
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