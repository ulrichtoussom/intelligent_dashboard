import { useId } from "react"



function Checkbox({check, toggleChecked}){

    const id = useId()
    return(

        <div className="mb-3 d-flex gap-3">
            <input 
                id={id}
                type="checkbox"
                checked={check} 
                onChange={() => toggleChecked(v => !v)}
            />
            <label  htmlFor={id} > Available </label>
        </div>
        
        
    )

}

export default Checkbox