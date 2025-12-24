

import { useMemo } from "react"
import Row from "./Row"

import '../componentStyle/ProductTable.css'


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
            <div className="product-list-container">
                <div className="product-header">
                    <span>userId</span>
                    <span className="title">Title</span>
                    <span>Available</span>
                </div>

                {filterProduct.map(album => <Row key={album.id} userID={album.id} title={album.title} check={album.available} />)}

            </div>

                         
        
        </>
    )
       
}

export default ProductTable