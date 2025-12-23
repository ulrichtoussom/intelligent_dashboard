
import './App.css'

import {Search} from 'react-bootstrap-icons'
import Input from './component/Input'
import ProductTable from './component/ProductTable'
import { useProduct } from './hooks/useProduct'
import { useEffect, useRef, useState } from 'react'
import  Checkbox   from './component/Checkbox'

function App() {

  const {loading, data}   = useProduct()
  const [search , setSearch] = useState('')
  const [available , setAvailable] = useState(false)
 
  const targetRef = useRef(null)

  useEffect(()=>{

    targetRef.current.focus()

  },[])

  return (
    <div className='container my-3'>

      <Input ref={targetRef} value={search} handleSearch={setSearch} />
      <Checkbox check={available} toggleChecked ={setAvailable} />
      
      {loading && <div> Chargement ... </div>}
      {data && <ProductTable albums={data} search ={search} check={available}  />}

      
    </div>
  )
    
}

export default App
