
import { forwardRef, useId } from 'react'
import {Search} from 'react-bootstrap-icons'
// import { useInput } from '../hooks/useInput'



 const Input = forwardRef(function Input({value, handleSearch},ref){

    const id = useId()

    return(
        <div className='input-group mt-3'>
            <input 
                ref={ref}
                id={id}
                type="text" className="form-control" placeholder="Rechecher ..." 
                value={value}
                onChange={(e)=> handleSearch?.(e.target.value)}
                />
            <span className="input-group-text">
                <label htmlFor={id} className='form-label'> <Search /> </label>
            </span>

        </div>
    )
})

export default Input