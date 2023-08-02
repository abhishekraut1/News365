import React from 'react'
import "./css files/NotFound.css"
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div id='notfoundid' className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>
                                Oops!</h1>
                            <h2>
                                404 Not Found</h2>
                            <div className="error-details">
                                Sorry, an error has occured, Requested page not found!
                            </div>
                            <div className="error-actions">
                                <button className="btn" onClick={()=>{navigate("/")}}>Take me Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
