


import {Check, XCircleFill}  from 'react-bootstrap-icons'


export default function Row({userID , title, check}){

    return(
        <tr>< td>{userID}</td><td>{title}</td><td>{ check ? <Check color='green' size={20}/> : <XCircleFill color='red'/> } </td></tr>
    )
}

