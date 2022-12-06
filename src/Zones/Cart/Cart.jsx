import "./Cart.css"
import $ from "jquery"

function Cart(){

    const opencart = ()=>{
        $('.cart-div').addClass('cart-open')
        $('.cart-div table').addClass('cart-tableopen')
        $('.nrofitems').addClass('cart-nrofitemshide')
        $('.cart-container').addClass('cart-containerflex')
        $('.close-cart').addClass('close-cartshow')
        console.log('open')
    }    

    const closecart = () =>{
        $('.cart-div').removeClass('cart-open')
        $('.cart-div table').removeClass('cart-tableopen')
        $('.nrofitems').removeClass('cart-nrofitemshide')
        $('.cart-container').removeClass('cart-containerflex')
        $('.close-cart').removeClass('close-cartshow')
        console.log('close')
    }

  
    
    return(
        <>
         
        <div onClick={closecart} className="close-cart">
                close
            </div>
        <div onClick={opencart} className="cart-div">
            <div className="nrofitems">
                <p></p>
            </div>
            <div className="cart-container">
            <table>
                <tbody>
                </tbody>
            </table>
            </div>
        </div>
        </>
    )
}
export default Cart