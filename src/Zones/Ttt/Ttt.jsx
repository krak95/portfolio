import "./Ttt.css"
import Squares from "../../Components/ttt/squares"
import {useState} from "react"
import $ from "jquery"
import X from "./../../Components/ttt/img/cancel.png"
import O from "./../../Components/ttt/img/letter-o.png"


function Ttt(){
const [player, setPlayer] = useState('O')
const [plays, setPlays] = useState(0)

    const play =(e)=>{
        if(e.target.innerHTML !== ''){
            return;
        }
        if(player === 'O'){
            e.target.innerHTML = 'O'
            setPlayer('X')
            setPlays(plays + 1)
        }
        if(player === 'X'){
            e.target.innerHTML = 'X'
            setPlayer('O')
            setPlays(plays + 1)
        }
        if(plays === 8){
            alert('TIED')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === 'O' && $('.s1').html() === 'O' && $('.s2').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === 'O' && $('.s3').html() === 'O' && $('.s6').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === 'O' && $('.s4').html() === 'O' && $('.s8').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s3').html() === 'O' && $('.s4').html() === 'O' && $('.s5').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s6').html() === 'O' && $('.s7').html() === 'O' && $('.s8').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s1').html() === 'O' && $('.s4').html() === 'O' && $('.s7').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === 'O' && $('.s5').html() === 'O' && $('.s8').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === 'O' && $('.s4').html() === 'O' && $('.s6').html() === 'O'){
            alert('Player O won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === 'X' && $('.s1').html() === 'X' && $('.s2').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === 'X' && $('.s3').html() === 'X' && $('.s6').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === 'X' && $('.s4').html() === 'X' && $('.s8').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s3').html() === 'X' && $('.s4').html() === 'X' && $('.s5').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s6').html() === 'X' && $('.s7').html() === 'X' && $('.s8').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s1').html() === 'X' && $('.s4').html() === 'X' && $('.s7').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === 'X' && $('.s5').html() === 'X' && $('.s8').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === 'X' && $('.s4').html() === 'X' && $('.s6').html() === 'X'){
            alert('Player X won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        console.log("player: ",player, "plays :",plays)
    }

const swapFirstO = () =>{
    setPlayer('O')
    console.log(player)
}
const swapFirstX = () =>{
    setPlayer('X')
    console.log(player)
}
    
const squares = 
    [
        ['','','',],
        ['','','',],
        ['','','',],
      ];

    return(
        <>
        <h1>Player {player} turn</h1>
        <div className="div-flex">
            
        <div className="game-div">
        <div>
                <button onClick={swapFirstO}>First player O</button>
                <button onClick={swapFirstX}>First player X</button>
            </div>
        <div className="gameboard">
        {squares.flat().map((val, i) => {
            return(
           <Squares onClick={play} key={i} className={'s'+i} value={val}/>
            )
        })}
        </div>
        </div>

        </div>
        </>
    )
}
export default Ttt

/*
 <tbody>
                <tr>
                    <button className="s0" onClick={play}>-</button>
                    <button className="s1" onClick={play}>-</button>
                    <button className="s2" onClick={play}>-</button>
                </tr>
                <tr>
                    <button className="s3" onClick={play}>-</button>
                    <button className="s4" onClick={play}>-</button>
                    <button className="s5" onClick={play}>-</button>
                </tr>
                <tr>
                    <button className="s6" onClick={play}>-</button>
                    <button className="s7" onClick={play}>-</button>
                    <button className="s8" onClick={play}>-</button>
                </tr>
            </tbody>*/