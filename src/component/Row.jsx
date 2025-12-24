


import {Check, XCircleFill}  from 'react-bootstrap-icons'


export default function Row({userID , title, check}){

    /* return(
        <tr>< td>{userID}</td><td>{title}</td><td>{ check ? <Check color='green' size={20}/> : <XCircleFill color='red'/> } </td></tr>
    ) */

    return(
        <div className='product-row'>

            <div className="product-category">{userID}</div>
            <div className="product-name" style={{ fontWeight: '600' }}>
                {title}
            </div>

            <div>
                <span className={`status-badge ${ check ? 'status-in' : 'status-out'}`}>
                {check ? <Check color='green' size={20}/> : <XCircleFill color='red'/>}
                </span>
            </div>


        </div>
    )


}

