import "./Ttt.css"
import Squares from "../../Components/ttt/squares"
import {useState} from "react"
import $ from "jquery"


function Ttt(){
const [player, setPlayer] = useState(0)
const [plays, setPlays] = useState(0)

    const play =(e)=>{
        if(e.target.innerHTML !== ''){
            return;
        }
        if(player === 0){
            e.target.innerHTML = '0'
            setPlayer(1)
            setPlays(plays + 1)
        }
        if(player === 1){
            e.target.innerHTML = '1'
            setPlayer(0)
            setPlays(plays + 1)
        }
        if(plays === 8){
            alert('gameover')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === '0' && $('.s1').html() === '0' && $('.s2').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === '0' && $('.s3').html() === '0' && $('.s6').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === '0' && $('.s4').html() === '0' && $('.s8').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s3').html() === '0' && $('.s4').html() === '0' && $('.s5').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s6').html() === '0' && $('.s7').html() === '0' && $('.s8').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s1').html() === '0' && $('.s4').html() === '0' && $('.s7').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === '0' && $('.s5').html() === '0' && $('.s8').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === '0' && $('.s4').html() === '0' && $('.s6').html() === '0'){
            alert('player0 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === '1' && $('.s1').html() === '1' && $('.s2').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === '1' && $('.s3').html() === '1' && $('.s6').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s0').html() === '1' && $('.s4').html() === '1' && $('.s8').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s3').html() === '1' && $('.s4').html() === '1' && $('.s5').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s6').html() === '1' && $('.s7').html() === '1' && $('.s8').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s1').html() === '1' && $('.s4').html() === '1' && $('.s7').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === '1' && $('.s5').html() === '1' && $('.s8').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        if($('.s2').html() === '1' && $('.s4').html() === '1' && $('.s6').html() === '1'){
            alert('player1 won')
            $('.gameboard button').html('')
            setPlays(0)
        }
        console.log("player: ",player, "plays :",plays)
    }
    
const squares = 
    [
        ['','','',],
        ['','','',],
        ['','','',],
      ];

    return(
        <>
        <h1>Player {player.player} turn</h1>
        <div className="div-flex">
        <div className="game-div">
        <div className="gameboard">
        {squares.flat().map((btn, i) => {
            return(
           <Squares onClick={play} key={i} className={'s'+i}/>
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