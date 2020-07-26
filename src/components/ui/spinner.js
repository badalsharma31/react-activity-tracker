import React from 'react'
import spinner from '../../img/spinner.gif';
const Spinner = props => {
    return (
        <div>
            <img src={spinner} alt="loading..." style={{width: "100px", margin: "auto", display:"block" }}></img>
        </div>
    )
}


export default Spinner;
