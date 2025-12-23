

import { useMemo } from "react"
import Row from "./Row"



/**
 * @typedef {Object} album
 * @property {number} userId
 * @property {number} id
 * @property {string} title
 * @property {boolean} available
 */

/**
 * @typedef {Object} PropsProductTable
 * @property {album[]} albums
 * @property {string} search
 * @property {boolean} check
 */

/**
 * 
 * @param {PropsProductTable} param
 * @returns 
 */

function ProductTable({albums, search, check}){

    const filterProduct = useMemo(()=>{

        return albums.filter( album => {

            if(!(album.title.toLowerCase().includes(search.toLowerCase()))){
                return false
            }
            if(check && !album.available ){
                return false
            }
            return true 
        })

    },[albums,search,check])

    return(
        <>
            <table className="table table-hover table-primary table-striped">
                <thead>
                    <tr><th  style={{color:'red'}} className="text-end">userId</th><th  style={{color:'red'}} className="text-center">Title</th><th>Available</th></tr>
                </thead>
                <tbody>

                    {filterProduct.map(album => <Row key={album.id} userID={album.id} title={album.title} check={album.available} />)}
                    
                </tbody>

            </table>
        
        </>
    )
       
}

export default ProductTable