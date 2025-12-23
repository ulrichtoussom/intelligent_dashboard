import { useState } from "react"




export const useInput = function(){
    const [value , setValue] = useState('')

    const handlevalue = (e)=>{
        setValue(e.target.value)
    }


    return [value , handlevalue]
}