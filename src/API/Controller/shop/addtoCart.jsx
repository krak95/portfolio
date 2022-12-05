import { useEffect } from "react"
import {addCart} from "./../../Axios"
import $ from "jquery"

export const addtocart = (item,session) =>{
    addCart(item,session)
    $('')
}
