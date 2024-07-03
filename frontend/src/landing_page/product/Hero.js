import React from "react";
import { Link } from "react-router-dom";
export default function Hero(){
    return (
        <div className="container">
            <div className="text-center" style={{margin:"10% 0"}}>
                <h1>Technology</h1>
                <p>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> nvestment offerings </Link> </p>
            </div>
            <hr/>
        </div>
    )
}