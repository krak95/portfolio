import bpawn from "./img/bpawn.png"
import bbish from "./img/blackbishop.png"
import wbish from "./img/whitebishop.png"
import btow from "./img/blacktower.png"
import bknight from "./img/bknight.png"
import wknight from "./img/wknight.png"
import bqueen from "./img/bqueen.png"
import wqueen from "./img/wqueen.png"
import bking from "./img/bking.png"

function Tile({color,piece,number}){
    if(number % 2 === 0){
        return <div className="tile black-tile">
            <div color={color} piece={piece}>{color}<br></br>{piece}</div>
            </div>
    }else{
        return <div className="tile white-tile">
            <div color={color} piece={piece}>{color}<br></br>{piece}</div>
            </div>
    }
}
export default Tile