import React from "react";
import { Link } from "react-router-dom";
export default function Hero(){
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <h4 className="text-center mb-5"><Link className="link-underline link-underline-opacity-0" aria-current="page" to="/signup">Brokerage calculator</Link> </h4>
                    <ul className="ms-5">
                        <li> Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order. </li>
                        <li>Digital contract notes will be sent via e-mail. </li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply. </li>
                        <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower). </li>
                        <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower). </li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order. </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3 className="text-center"> <Link className="text-center link-underline link-underline-opacity-0" aria-current="page" to="/signup">List of charges</Link> </h3>
                </div>

            </div>
        </div>
    )
}