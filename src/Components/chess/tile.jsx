import pawn from "./img/pawn.png"

function Tile({color,piece}){
    
    if(color === 'white' && piece==='pawn'){

        return(<img src={pawn} alt="" />)
    }
    else{
        return(<div>hello</div>)
    }


}
export default Tile