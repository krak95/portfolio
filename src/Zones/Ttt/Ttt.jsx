import "./Ttt.css"
import {useState} from "react"
import $ from "jquery"

function Ttt(){
const [player, setPlayer] = useState(0)
const [plays, setPlays] = useState(0)

    const play =(e)=>{
        alert($('.s0').html())
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
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s0').html() === '0' && $('.s1').html() === '0' && $('.s2').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s0').html() === '0' && $('.s3').html() === '0' && $('.s6').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s0').html() === '0' && $('.s4').html() === '0' && $('.s8').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s3').html() === '0' && $('.s4').html() === '0' && $('.s5').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s6').html() === '0' && $('.s7').html() === '0' && $('.s8').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s1').html() === '0' && $('.s4').html() === '0' && $('.s7').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s2').html() === '0' && $('.s5').html() === '0' && $('.s8').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s2').html() === '0' && $('.s4').html() === '0' && $('.s6').html() === '0'){
            alert('player0 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s0').html() === '1' && $('.s1').html() === '1' && $('.s2').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s0').html() === '1' && $('.s3').html() === '1' && $('.s6').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s0').html() === '1' && $('.s4').html() === '1' && $('.s8').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s3').html() === '1' && $('.s4').html() === '1' && $('.s5').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s6').html() === '1' && $('.s7').html() === '1' && $('.s8').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s1').html() === '1' && $('.s4').html() === '1' && $('.s7').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s2').html() === '1' && $('.s5').html() === '1' && $('.s8').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }
        if($('.s2').html() === '1' && $('.s4').html() === '1' && $('.s6').html() === '1'){
            alert('player1 won')
            $('.gameboard td').html('')
            setPlays(0)
        }



        






        console.log("player: ",player, "plays :",plays)
    }
    
    return(
        <>
        <h1>Player {player.player} turn</h1>
        <div className="game-div">
        <table className="gameboard">
            <tbody>
                <tr>
                    <td className="s0" onClick={play}>-</td>
                    <td className="s1" onClick={play}>-</td>
                    <td className="s2" onClick={play}>-</td>
                </tr>
                <tr>
                    <td className="s3" onClick={play}>-</td>
                    <td className="s4" onClick={play}>-</td>
                    <td className="s5" onClick={play}>-</td>
                </tr>
                <tr>
                    <td className="s6" onClick={play}>-</td>
                    <td className="s7" onClick={play}>-</td>
                    <td className="s8" onClick={play}>-</td>
                </tr>
            </tbody>
        </table>
        </div>
        </>
    )
}
export default Ttt