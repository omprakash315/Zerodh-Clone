import React from "react";
import { Link } from "react-router-dom";
export default function Team(){
    return (
        <div className="container">
            <div className="text-center">
                <h2>People</h2>
            </div>
            <div className="row m-5">
                <div className="col text-center">
                    <img src="image\About\nithin-kamath.jpg" className="rounded-circle"  height={"295px"}/>
                    
                        <h4>Nithin Kamath</h4>
                        <p>Founder, CEO</p>
                    
                </div>
                <div className="col">
                    <br/>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on  <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> homepage </Link> / <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> TradingQnA </Link> / <Link className="link-underline link-underline-opacity-0" aria-current="page" to="/"> Twitter </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}