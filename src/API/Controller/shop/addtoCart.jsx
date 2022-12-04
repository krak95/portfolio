import {addCart} from "./../../Axios"
export const addtocart = (item,session) =>{
    addCart(item,session)
    console.log('addtocart',item,session)
}
