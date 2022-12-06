import {addCart} from "./../../Axios"

export const cart = (item) =>{
    const result = addCart(item)
    console.log(result)
}