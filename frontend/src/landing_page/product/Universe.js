import React from "react";
import { Link } from "react-router-dom";
export default function Hero(){
    return (
        <div className="container">
            <div className="text-center mb-5">
                <p>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            </div>
            <div className="text-center m-5">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row m-5">
                <div className="col-4">
                    <img src="image\Product\Universe\smallcase-logo.png" height={"55px"} width={"210px"}/>
                    <p>Thematic investment platform</p>                  
                </div>
                <div className="col-4">
                    <img src="image\Product\Universe\streak-logo.png" height={"55px"} width={"167px"}/>
                    <p>Algo & strategy platform</p>
                </div>
                <div className="col-4">
                    <img src="image\Product\Universe\sensibull-logo.svg" height={"40px"} width={"230px"}/>
                    <p>Options trading platform</p>
                </div>
                <div className="col-4">
                    <img src="image\Product\Universe\zerodhafundhouse.png" height={"55px"} width={"200px"}/>
                    <p>Asset managment</p>
                </div>
                <div className="col-4">
                    <img src="image\Product\Universe\tijori.svg" height={"55px"} width={"146px"}/>
                    <p>Fundamental research platform</p>
                </div>
                <div className="col-4">
                    <img src="image\Product\Universe\ditto-logo.png" height={"55px"} width={"144px"}/>
                    <p>Insurance
                    Sign up now</p>
                </div>
            </div>
            <div className="text-center mb-5">
                <button class="btn btn-primary">Sign up now</button>
            </div>
        </div>
    )
}