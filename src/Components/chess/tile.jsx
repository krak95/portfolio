import bpawn from "./img/bpawn.png"
import bbish from "./img/blackbishop.png"
import wbish from "./img/whitebishop.png"
import btow from "./img/blacktower.png"
import bknight from "./img/bknight.png"
import wknight from "./img/wknight.png"
import bqueen from "./img/bqueen.png"
import wqueen from "./img/wqueen.png"
import bking from "./img/bking.png"

function Tile({color,piece,number,onMouseUp,onMouseDown,onMouseMove,x,y,refs}){

    if(number % 2 === 0 && piece !== undefined){
        return <div tile-x={x} tile-y={y} className="tile black-tile">
            <div color={color} refs={refs} onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseDown={onMouseDown} x={x} y={y} piece={piece}>{color}<br></br>{piece}</div>
            </div>
    }
    if(number % 2 !== 0 && piece !== undefined){
    return <div tile-x={x} tile-y={y}className="tile white-tile">
        <div color={color} refs={refs} onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseDown={onMouseDown} x={x} y={y} piece={piece}>{color}<br></br>{piece}</div>
        </div>
    }
    if(number % 2 === 0 && piece === undefined){
        return <div tile-x={x} tile-y={y} className="tile black-tile">
            </div>
    }
    if(number % 2 !== 0 && piece === undefined){
        return <div tile-x={x} tile-y={y} className="tile white-tile">
            </div>
    }
    

}
export default Tile