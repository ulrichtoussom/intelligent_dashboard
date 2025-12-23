import { useState } from "react"
import ProductTable from "../component/ProductTable"
import { useEffect} from 'react'

import {albums} from '../datas/albums'

/* 
    Hook connecte au composant App et permettant de connaitre l'etat du chargement des donnes albums 

    on passe le Loading a true au mounting , la <div> Chargement ... </div> est visible 
    et apres le mounting on simule un load dans le useEffect avec setTimeout et on passe loading a true et data on lui passe les donnees . 



*/


export const  useProduct = function(){

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)


    useEffect(() => {

        setTimeout(()=>{
            setLoading(false)
            setData(albums)
        },1000)

    }, [])


    return {loading , data}
}