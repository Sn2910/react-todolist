import React from 'react'
import {AlertCircle, MoreVertical} from "react-feather"

function Card(){
    return (
        <div className="card">
            <div className="card_header">
                <div className="card_body">
                <MoreVertical />
                <AlertCircle /> 
                </div>
            </div>
            
        </div>
    )
}
export default Card