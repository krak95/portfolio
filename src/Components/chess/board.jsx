import { useEffect, useState } from "react";
import $ from 'jquery'

function Board(){
    /*const [board, setBoard] = useState([])
   const hAx = ['a','b','c','d','e','f','g','h']
    const vAx = ['1','2','3','4','5','6','7','8']*/

    const [pieces, setPiece] = useState( [
        {y:1,x:1,id:'1',fill:'yes',haxis:'a',vaxis:'1',class:'tower',color:'white'},
        {y:2,x:1,id:'2',fill:'yes',haxis:'a',vaxis:'2',class:'knight',color:'white'},
        {y:3,x:1,id:'3',fill:'yes',haxis:'a',vaxis:'3',class:'bishop',color:'white'},
        {y:4,x:1,id:'4',fill:'yes',haxis:'a',vaxis:'4',class:'queen',color:'white'},
        {y:5,x:1,id:'5',fill:'yes',haxis:'a',vaxis:'5',class:'king',color:'white'},
        {y:6,x:1,id:'6',fill:'yes',haxis:'a',vaxis:'6',class:'bishop',color:'white'},
        {y:7,x:1,id:'7',fill:'yes',haxis:'a',vaxis:'7',class:'knight',color:'white'},
        {y:8,x:1,id:'8',fill:'yes',haxis:'a',vaxis:'8',class:'tower',color:'white'},
        {y:1,x:2,id:'9',fill:'yes',haxis:'b',vaxis:'1',class:'pawn',color:'white'},
        {y:2,x:2,id:'10',fill:'yes',haxis:'b',vaxis:'2',class:'pawn',color:'white'},
        {y:3,x:2,id:'11',fill:'yes',haxis:'b',vaxis:'3',class:'pawn',color:'white'},
        {y:4,x:2,id:'12',fill:'yes',haxis:'b',vaxis:'4',class:'pawn',color:'white'},
        {y:5,x:2,id:'13',fill:'yes',haxis:'b',vaxis:'5',class:'pawn',color:'white'},
        {y:6,x:2,id:'14',fill:'yes',haxis:'b',vaxis:'6',class:'pawn',color:'white'},
        {y:7,x:2,id:'15',fill:'yes',haxis:'b',vaxis:'7',class:'pawn',color:'white'},
        {y:8,x:2,id:'16',fill:'yes',haxis:'b',vaxis:'8',class:'pawn',color:'white'},
        {y:1,x:3,id:'17',fill:'no',haxis:'c',vaxis:'1',class:'',color:''},
        {y:2,x:3,id:'18',fill:'no',haxis:'c',vaxis:'2',class:'',color:''},
        {y:3,x:3,id:'19',fill:'no',haxis:'c',vaxis:'3',class:'',color:''},
        {y:4,x:3,id:'20',fill:'no',haxis:'c',vaxis:'4',class:'',color:''},
        {y:5,x:3,id:'21',fill:'no',haxis:'c',vaxis:'5',class:'',color:''},
        {y:6,x:3,id:'22',fill:'no',haxis:'c',vaxis:'6',class:'',color:''},
        {y:7,x:3,id:'23',fill:'no',haxis:'c',vaxis:'7',class:'',color:''},
        {y:8,x:3,id:'24',fill:'no',haxis:'c',vaxis:'8',class:'',color:''},
        {y:1,x:4,id:'25',fill:'no',haxis:'d',vaxis:'1',class:'',color:''},
        {y:2,x:4,id:'26',fill:'no',haxis:'d',vaxis:'2',class:'',color:''},
        {y:3,x:4,id:'27',fill:'no',haxis:'d',vaxis:'3',class:'',color:''},
        {y:4,x:4,id:'28',fill:'no',haxis:'d',vaxis:'4',class:'',color:''},
        {y:5,x:4,id:'29',fill:'no',haxis:'d',vaxis:'5',class:'',color:''},
        {y:6,x:4,id:'30',fill:'no',haxis:'d',vaxis:'6',class:'',color:''},
        {y:7,x:4,id:'31',fill:'no',haxis:'d',vaxis:'7',class:'',color:''},
        {y:8,x:4,id:'32',fill:'no',haxis:'d',vaxis:'8',class:'',color:''},
        {y:1,x:5,id:'33',fill:'no',haxis:'e',vaxis:'1',class:'',color:''},
        {y:2,x:5,id:'34',fill:'no',haxis:'e',vaxis:'2',class:'',color:''},
        {y:3,x:5,id:'35',fill:'no',haxis:'e',vaxis:'3',class:'',color:''},
        {y:4,x:5,id:'36',fill:'no',haxis:'e',vaxis:'4',class:'',color:''},
        {y:5,x:5,id:'37',fill:'no',haxis:'e',vaxis:'5',class:'',color:''},
        {y:6,x:5,id:'38',fill:'no',haxis:'e',vaxis:'6',class:'',color:''},
        {y:7,x:5,id:'39',fill:'no',haxis:'e',vaxis:'7',class:'',color:''},
        {y:8,x:5,id:'40',fill:'no',haxis:'e',vaxis:'8',class:'',color:''},
        {y:1,x:6,id:'41',fill:'no',haxis:'f',vaxis:'1',class:'',color:''},
        {y:2,x:6,id:'42',fill:'no',haxis:'f',vaxis:'2',class:'',color:''},
        {y:3,x:6,id:'43',fill:'no',haxis:'f',vaxis:'3',class:'',color:''},
        {y:4,x:6,id:'44',fill:'no',haxis:'f',vaxis:'4',class:'',color:''},
        {y:5,x:6,id:'45',fill:'no',haxis:'f',vaxis:'5',class:'',color:''},
        {y:6,x:6,id:'46',fill:'no',haxis:'f',vaxis:'6',class:'',color:''},
        {y:7,x:6,id:'47',fill:'no',haxis:'f',vaxis:'7',class:'',color:''},
        {y:8,x:6,id:'48',fill:'no',haxis:'f',vaxis:'8',class:'',color:''},
        {y:1,x:7,id:'49',fill:'yes',haxis:'g',vaxis:'1',class:'pawn1',color:'black'},
        {y:2,x:7,id:'50',fill:'yes',haxis:'g',vaxis:'2',class:'pawn2',color:'black'},
        {y:3,x:7,id:'51',fill:'yes',haxis:'g',vaxis:'3',class:'pawn3',color:'black'},
        {y:4,x:7,id:'52',fill:'yes',haxis:'g',vaxis:'4',class:'pawn4',color:'black'},
        {y:5,x:7,id:'53',fill:'yes',haxis:'g',vaxis:'5',class:'pawn5',color:'black'},
        {y:6,x:7,id:'54',fill:'yes',haxis:'g',vaxis:'6',class:'pawn6',color:'black'},
        {y:7,x:7,id:'55',fill:'yes',haxis:'g',vaxis:'7',class:'pawn7',color:'black'},
        {y:8,x:7,id:'56',fill:'yes',haxis:'g',vaxis:'8',class:'pawn8',color:'black'},
        {y:1,x:8,id:'57',fill:'yes',haxis:'h',vaxis:'1',class:'tower',color:'black'},
        {y:2,x:8,id:'58',fill:'yes',haxis:'h',vaxis:'2',class:'knight',color:'black'},
        {y:3,x:8,id:'59',fill:'yes',haxis:'h',vaxis:'3',class:'bishop',color:'black'},
        {y:4,x:8,id:'60',fill:'yes',haxis:'h',vaxis:'4',class:'queen',color:'black'},
        {y:5,x:8,id:'61',fill:'yes',haxis:'h',vaxis:'5',class:'king',color:'black'},
        {y:6,x:8,id:'62',fill:'yes',haxis:'h',vaxis:'6',class:'bishop',color:'black'},
        {y:7,x:8,id:'63',fill:'yes',haxis:'h',vaxis:'7',class:'knight',color:'black'},
        {y:8,x:8,id:'64',fill:'yes',haxis:'h',vaxis:'8',class:'tower',color:'black'},
    ])

const [pickorput, setPickorput] = useState('pick')

    const pick =(e)=>{
        const picked = {
            x : e.target.getAttribute('data-x'),
            y : e.target.getAttribute('data-y'),
            chessClass : e.target.getAttribute('data-class'),
            color : e.target.getAttribute('data-color')
        }
        if(pickorput === 'pick' && picked.color !== ''){
            localStorage.setItem('piece',JSON.stringify(picked))
            console.log('pick',picked)
            setPickorput('put')
            if(picked.chessClass === 'pawn' && picked.color === 'white'){
                let xmove = picked.x;
                let ymove = picked.y;
                let xposs1 = parseInt(xmove)+1
                let xposs2 = parseInt(xmove)+2
                console.log('xposs1:',xposs1,'xposs2:',xposs2)
                $('[data-x='+xposs1+'][data-y='+ymove+']').css('background-color','green')
                $('[data-x='+xposs2+'][data-y='+ymove+']').css('background-color','green')
            }
        }else{return}
 
    }

    const play =()=>{
        if(pickorput === 'put'){
            const piece = JSON.parse(localStorage.getItem('piece'))
            console.log('put', piece)
            setPickorput('pick')
        }else{return}

    }

    return(
        <>
        <div className="chessboard">
            {pieces.map((piece)=>(
                   <div onClick={play} data-class={piece.class} data-color={piece.color} data-x={piece.x} data-y={piece.y} onClick={pick} className={piece.haxis+piece.id+' '+piece.haxis} key={piece.id}> <div onClick={play} data-class={piece.class} data-color={piece.color} data-x={piece.x} data-y={piece.y} className={'piece-div'+' '+piece.fill}>{piece.class}<br></br>{piece.color}</div></div>
            ))}
        </div>
        </>
    ) 
}

export default Board;