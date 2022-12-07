import {addCart} from "./../../Axios"

export const cart = async (item) =>{
    const result = await addCart(item)
    console.log('add this :',result.data.name)
}