import "./Cart.css"
import $ from "jquery"

function Cart(){

    const opencart = ()=>{
        $('.cart-div').toggleClass('cart-open')
        $('.cart-div table').toggleClass('cart-tableopen')
        $('.nrofitems').toggleClass('cart-nrofitemshide')
    }    
    
    return(
        <>
        <div onClick={opencart} className="cart-div">
            <div className="nrofitems">
                <p></p>
            </div>
            <table>
                <tbody>
                </tbody>
            </table>
        </div>
        </>
    )
}
export default Cart